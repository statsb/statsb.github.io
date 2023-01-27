import { FormEvent, useState } from 'react';

function DataTable({ data, threshold }: any) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">##</th>
          <th scope="col">buySellRatio</th>
          <th scope="col">buyVol</th>
          <th scope="col">sellVol</th>
          <th scope="col">timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ buySellRatio, buyVol, sellVol, timestamp }: any, index: number) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <span className={buySellRatio <= threshold ? "badge bg-danger" : ""}>
                {buySellRatio}
              </span>
            </td>
            <td>{buyVol}</td>
            <td>{sellVol}</td>
            <td>{`${new Date(timestamp).toLocaleTimeString()}, ${new Date(timestamp).toLocaleDateString()}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [symbol, setSymbol] = useState<string>('BTCUSDT');
  const [period, setPeriod] = useState<string>('15m');
  const [limit, setLimit] = useState<number>(100);
  const [threshold, setThreshold] = useState<number>(0.8);
  const [gap, setGap] = useState<number>(1);
  const [timer, setTimer] = useState<number>(0);
  const [data, setData] = useState([]);

  const onSymbolChange = (event: FormEvent<HTMLInputElement>) => {
    setSymbol(event.currentTarget.value)
  }

  const onPeriodChange = (event: FormEvent<HTMLSelectElement>) => {
    setPeriod(event.currentTarget.value)
  }

  const onThresholdChange = (event: FormEvent<HTMLInputElement>) => {
    setThreshold(Number(event.currentTarget.value))
  }

  const onGapChange = (event: FormEvent<HTMLSelectElement>) => {
    setGap(Number(event.currentTarget.value))
  }

  const onLimitChange = (event: FormEvent<HTMLInputElement>) => {
    setLimit(Number(event.currentTarget.value))
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fapi.binance.com/futures/data/takerlongshortRatio?symbol=${symbol}&period=${period}&limit=500`, {
        headers: {
          'X-MBX-APIKEY': '1sqj86AlSZsVw19qzAcda7iJ3qbBDX8sZsgob8SEWFBVhFxwK5NcLPDXeZwXryEp'
        }
      });
      const data = await response.json();
      console.log(data);
      setData(data);
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

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <strong>statsb</strong>
        </h5>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card mb-5">
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
                      <label htmlFor="threshold">Limit</label>
                      <input value={limit} onChange={onLimitChange} type="number" className="form-control" id="limit" aria-describedby="limitHelp" placeholder="limit (30 - 500)" />
                    </div>

                    <div className="col form-group mb-3">
                      <label htmlFor="threshold">Threshold</label>
                      <input value={threshold} onChange={onThresholdChange} type="number" className="form-control" id="threshold" aria-describedby="thresholdHelp" placeholder="warning threshold" />
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button disabled={loading} type="submit" className="btn btn-block btn-warning mb-2">Submit</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row">
              <div className="col form-group mb-3">
                <label htmlFor="gap">Make requests every:</label>
                <select value={gap} onChange={onGapChange} className="form-control" id="gap">
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

            <br />
            Making next request in:
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">


        {loading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
        {!!data.length && <DataTable data={data} threshold={threshold} />}
      </div>
    </>
  )
}
