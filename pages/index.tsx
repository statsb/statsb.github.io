import { FormEvent, useEffect, useRef, useState } from 'react';
import style from './Theme.module.css'


function DataTable({ data, lowerThreshold, upperThreshold, filtered }: any) {
  return (
    <table className="table table-hover table-sm">
      <thead className="table-light">
        <tr>
          <th scope="col" className={style.th}>#</th>
          <th scope="col" className={style.th}>buySellRatio</th>
          <th scope="col" className={style.th}>buyVol</th>
          <th scope="col" className={style.th}>sellVol</th>
          <th scope="col" className={style.th}>timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ buySellRatio, buyVol, sellVol, timestamp }: any, index: number) => {
          const isLowerThreshold = buySellRatio <= lowerThreshold;
          const isUpperThreshold = buySellRatio >= upperThreshold;

          if (filtered && (!isLowerThreshold && !isUpperThreshold)) {
            return null;
          }

          const highlightedClass = isLowerThreshold ? 'danger' : (isUpperThreshold ? 'success' : '');

          return (
            <tr key={index} className={highlightedClass ? `table-${highlightedClass}` : ''}>
              <th scope="row">{index + 1}</th>
              <td>
                <span className={highlightedClass ? `badge bg-${highlightedClass}` : ''}>
                  {buySellRatio}
                </span>
              </td>
              <td>{buyVol}</td>
              <td>{sellVol}</td>
              <td className="small">
                {`${new Date(timestamp).toLocaleTimeString().replace(':00 AM', ' am').replace(':00 PM', ' pm')}, ${new Date(timestamp).toLocaleDateString()}`}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

function Stats({ apikey }: any) {
  const LOWER_THRESHOLD = 0.8;
  const UPPER_THRESHOLD = 1.2;

  const [loading, setLoading] = useState<boolean>(false);
  const [symbol, setSymbol] = useState<string>('BTCUSDT');
  const [period, setPeriod] = useState<string>('5m');
  const [limit, setLimit] = useState<number>(100);
  const [lowerThreshold, setLowerThreshold] = useState<number>(LOWER_THRESHOLD);
  const lowerThresholdRef = useRef(LOWER_THRESHOLD);
  const [upperThreshold, setUpperThreshold] = useState<number>(UPPER_THRESHOLD);
  const upperThresholdRef = useRef(UPPER_THRESHOLD);
  const [gap, setGap] = useState<number>(0.5);
  const gapRef = useRef(0.5);
  const [timer, setTimer] = useState<number>(0);
  const timerRef = useRef(0);
  const timeoutRef = useRef<any>(null);
  const [filtered, setFiltered] = useState<boolean>(false);
  const [data, setData] = useState([]);

  const onFilterChange = () => {
    setFiltered(!filtered);
  }

  const onSymbolChange = (event: FormEvent<HTMLInputElement>) => {
    setSymbol(event.currentTarget.value)
  }

  const onPeriodChange = (event: FormEvent<HTMLSelectElement>) => {
    setPeriod(event.currentTarget.value)
  }

  const onLowerThresholdChange = (event: FormEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    setLowerThreshold(value);
    lowerThresholdRef.current = value;
  }

  const onUpperThresholdChange = (event: FormEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    setUpperThreshold(Number(event.currentTarget.value));
    upperThresholdRef.current = value;
  }

  const onGapChange = (event: FormEvent<HTMLSelectElement>) => {
    setGap(Number(event.currentTarget.value));
    gapRef.current = Number(event.currentTarget.value);

    timerRef.current = 0;
    setTimer(0);
  }

  const onLimitChange = (event: FormEvent<HTMLInputElement>) => {
    setLimit(Number(event.currentTarget.value))
  }

  const updateTimer = (reset = false) => {
    const step = 1; // seconds
    if (reset) {
      timerRef.current = gapRef.current * 60;
      setTimer(gapRef.current * 60); // gap is in minutes, timer expects seconds
    }

    timeoutRef.current = setTimeout(() => {
      const updatedTimer = Math.max(timerRef.current - step, 0);

      if (updatedTimer === 0) {
        fetchData();
        setTimer(updatedTimer);
      } else {
        timerRef.current = updatedTimer;
        setTimer(updatedTimer);
        updateTimer();
      }
    }, step * 1000);
  }

  const calculateStats = (data: any) => {
    if (!data || !data.length) {
      return;
    }
    let lowerHighlightsCount = 0;
    let upperHighlightsCount = 0;

    const dataClone = JSON.parse(JSON.stringify(data));

    dataClone.forEach(({ buySellRatio }: any) => {
      if (buySellRatio <= lowerThresholdRef.current) {
        lowerHighlightsCount += 1;
      } else if (buySellRatio >= upperThresholdRef.current) {
        upperHighlightsCount += 1;
      }
    });

    if (typeof document !== 'undefined') {
      document.title = `${symbol} 🔴${lowerHighlightsCount} 🟢${upperHighlightsCount}`
    }
  }

  const fetchData = async () => {
    clearTimeout(timeoutRef.current);
    try {
      setLoading(true);
      const response = await fetch(`https://fapi.binance.com/futures/data/takerlongshortRatio?symbol=${symbol}&period=${period}&limit=${limit}`, {
        headers: {
          'X-MBX-APIKEY': apikey
        }
      });
      const data = await response.json();
      console.log(data);
      setData(data);
      if (!data || !data.length) {
        return;
      }
      updateTimer(true);
      calculateStats(data);
    }
    catch (error: any) {
      console.log(error);
      document.write(JSON.stringify(error?.message));
    }
    finally {
      setLoading(false);
    }
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('APIKEY');
      window.location.reload();
    }
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light mb-5 p-3 shadow-sm">
        <div className="container-fluid">
          <strong className="navbar-brand">statsb</strong>
          <div className="d-flex">
            <button className="btn btn-dark" onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-sm mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Taker Buy/Sell Volume</h5>
                <h6 className="card-subtitle mb-4 text-muted">
                  <code>GET /futures/data/takerlongshortRatio</code>
                </h6>

                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col form-group mb-3">
                      <label htmlFor="symbol">Symbol</label>
                      <input value={symbol} onChange={onSymbolChange} type="text" className="form-control" id="symbol" aria-describedby="symbolHelp" placeholder="symbol e.g. BTCUSDT" />
                    </div>

                    <div className="col form-group mb-3">
                      <label htmlFor="period">Period</label>
                      <select value={period} onChange={onPeriodChange} className="form-control" id="period">
                        <option>1m</option>
                        <option>3m</option>
                        <option>5m</option>
                        <option>15m</option>
                        <option>30m</option>
                        <option>1h</option>
                        <option>2h</option>
                        <option>4h</option>
                        <option>6h</option>
                        <option>12h</option>
                        <option>1d</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col form-group mb-3">
                      <label htmlFor="lowerThreshold">Limit</label>
                      <input value={limit} onChange={onLimitChange} type="number" className="form-control" id="limit" aria-describedby="limitHelp" placeholder="limit (30 - 500)" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col form-group mb-3">
                      <label htmlFor="lowerThreshold">Lower Threshold</label>
                      <input value={lowerThreshold} onChange={onLowerThresholdChange} type="number" className="form-control" id="lowerThreshold" aria-describedby="lowerThresholdHelp" placeholder="lowerThreshold" />
                    </div>

                    <div className="col form-group mb-3">
                      <label htmlFor="upperThreshold">Upper Threshold</label>
                      <input value={upperThreshold} onChange={onUpperThresholdChange} type="number" className="form-control" id="upperThreshold" aria-describedby="upperThresholdHelp" placeholder="upperThreshold" />
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button disabled={loading} type="submit" className="btn btn-block btn-warning mb-2">Submit</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className="col-sm mb-5">
            {!!data.length && (
              <>
                <div className="row">
                  <div className="col form-group mb-3">
                    <label htmlFor="gap">Make requests every:</label>
                    <select value={gap} onChange={onGapChange} className="form-control" id="gap">
                      <option value={0.5}>30s</option>
                      <option value={1}>1m</option>
                      <option value={2}>2m</option>
                      <option value={3}>3m</option>
                      <option value={5}>5m</option>
                      <option value={15}>15m</option>
                      <option value={30}>30m</option>
                      <option value={60}>1h</option>
                    </select>
                  </div>
                  <div className="col"></div>
                </div>


                next request in <b>({timer}s)</b>:
                <div className="progress mb-5">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${Math.floor((timer / (gap * 60)) * 100)}%` }}
                  />
                </div>

                <div className="d-flex flex-row-reverse">
                  <div className="form-check pt-5">
                    <input checked={filtered} onChange={onFilterChange} type="checkbox" className={style.checkbox + ' form-check-input'} id="filtered" />
                    <label className={style.biglabel + ' form-check-label'} htmlFor="filtered">Filtered</label>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={style.relative + ' container'}>
        {loading && (
          <div className={style.loader}>
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          </div>
        )}
        {!!data.length && <DataTable data={data} lowerThreshold={lowerThreshold} upperThreshold={upperThreshold} filtered={filtered} />}
        {!!data && !data.length && (<div className="text-muted">[No data]</div>)}
      </div>
    </>
  )
}

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onUsernameChange = (event: FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }

  const onPasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    if (!username || !password) {
      setError('Username and Password are mandatory!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://aliveapi.cyclic.app/statsblogin", {
        // const response = await fetch("http://localhost:5000/statsblogin", {
        "headers": {
          "content-type": "application/json",
        },
        "body": JSON.stringify({ username, password }),
        "method": "POST"
      });

      const { success, error, key } = await (response as any).json();

      if (!success) {
        setError(error + ', please try again..');
        return;
      }

      else if (success && key && typeof window !== 'undefined') {
        window.localStorage.setItem('APIKEY', key);
        window.location.reload();
      }
    } catch (error: any) {
      setError(error?.message + ', please try again..');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={style.mt150 + ' container'}>
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm">
          <form onSubmit={login}>
            <div>
              <label htmlFor="username" className="form-label">Username</label>
              <input value={username} onChange={onUsernameChange} type="text" className="form-control" id="username" aria-describedby="usernameHelp" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input value={password} onChange={onPasswordChange} type="password" className="form-control" id="password" />
            </div>

            <div className="d-grid gap-2 mb-2">
              <button type="submit" disabled={loading} className="btn btn-warning">Login</button>
            </div>

            {!!error && (
              <div className="text-danger">
                {error}
              </div>
            )}

          </form>
        </div>
        <div className="col-sm" />
      </div>
    </div>
  )
}

export default function Home() {
  const [status, setStatus] = useState<string>('PENDING');
  const [apikey, setApikey] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const APIKEY = localStorage.getItem('APIKEY');

    if (APIKEY) {
      setApikey(APIKEY);
      setStatus('LOGGED_IN');
    }
    else {
      setStatus('LOGGED_OUT');
    }
  }, [])

  if (status === 'PENDING') {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  else if (status === 'LOGGED_OUT') {
    return <Login />
  }

  else if (status === 'LOGGED_IN') {
    return <Stats apikey={apikey} />
  }

  return null;
}