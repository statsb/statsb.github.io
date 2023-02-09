import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';


function QueryTable() {
  const [data, setData] = useState([{
    symbol: 'BTCUSDT', period: '5m', limit: 30, lowerThreshold: 0.8, upperThreshold: 1.2, gap: 5, filtered: true, notify: false
  }]);
  const windowsRef = useRef<any>([]);
  const [closeEnabled, setCloseEnabled] = useState<boolean>(false);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const syncData = (data: any) => {
    localStorage.setItem('QUERY_ARRAY', JSON.stringify(data));
  };

  const saveData = (data: any) => {
    setData(data);
    syncData(data);
  }

  const updateTheme = (darkTheme = false) => {
    if (darkTheme) {
      document.body.setAttribute('data-bs-theme', 'dark');
    } else {
      document.body.removeAttribute('data-bs-theme');
    }
  };

  useEffect(() => {
    console.log('udbhav')
    if (typeof window === 'undefined') {
      return;
    }
    const dataString = localStorage.getItem('QUERY_ARRAY');
    const DARK_THEME = localStorage.getItem('DARK_THEME');


    if (dataString) {
      const savedData = JSON.parse(dataString);
      setData(savedData);
    }

    if (DARK_THEME === '1') {
      setDarkTheme(true);
      updateTheme(true);
    }
  }, []);

  const addRow = () => {
    const dataClone = JSON.parse(JSON.stringify(data));
    dataClone.unshift({
      symbol: '', period: '5m', limit: 30, lowerThreshold: '', upperThreshold: '', gap: 5, filtered: true, notify: false
    });

    saveData(dataClone);
  };

  const deleteRow = (index: number) => {
    const dataClone = JSON.parse(JSON.stringify(data));
    dataClone.splice(index, 1);

    saveData(dataClone);
  }

  const onChange = (index: number, key: string, value: any) => {
    const dataClone = JSON.parse(JSON.stringify(data));

    dataClone[index][key] = value;
    saveData(dataClone);
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('APIKEY');
      window.location.reload();
    }
  }

  const start = () => {
    if (windowsRef.current?.length > 100) {
      windowsRef.current = [];
    }

    data.forEach(({ symbol, period, limit, lowerThreshold, upperThreshold, gap, filtered, notify }: any) => {
      if (!symbol || !lowerThreshold || !upperThreshold) {
        return;
      }
      const windowRef = window.open(`/query#/${symbol}/${period}/${limit}/${lowerThreshold}/${upperThreshold}/${gap}/${Number(filtered)}/${Number(notify)}`, '_blank');
      // console.log(`/query#/${symbol}/${period}/${limit}/${lowerThreshold}/${upperThreshold}/${gap}/${Number(filtered)}/${Number(notify)}`, '_blank');
      windowsRef.current.push(windowRef);
    });

    setCloseEnabled(true);
  };

  const closeAll = () => {
    if (!windowsRef.current?.length) {
      return;
    }

    windowsRef.current.forEach((windowRef: any) => {
      windowRef?.close();
    });

    setCloseEnabled(false);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark mb-5 p-3 shadow-sm">
        <div className="container-fluid">
          <strong className="navbar-brand">TEAM CRYPTO WHALE</strong>
          <div className="d-flex">
            <div className="form-group toggle-box mr-50">
              {/* <span className="btn btn-outline-secondary"> */}
              <span className="fs-5 p-1">🔆</span>
              <input checked={darkTheme} onChange={(e) => {
                updateTheme(!darkTheme);
                localStorage.setItem('DARK_THEME', darkTheme ? '0' : '1');
                setDarkTheme(!darkTheme);
              }} type="checkbox" className="form-check-input" id="darkTheme" />
              <span className="fs-5 p-1 invert">🌙</span>
              {/* </span> */}
            </div>
            <button className="btn btn-outline-warning" onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>

      <div className="container">

        <div className="row">
          <div className="col">
            <table className={`table table-lg ${darkTheme ? 'table-dark' : ''}`}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Period</th>
                  <th scope="col">Limit</th>
                  <th scope="col">LT</th>
                  <th scope="col">UT</th>
                  <th scope="col">Refresh Interval</th>
                  <th scope="col">Filtered</th>
                  <th scope="col">Notify</th>
                  <th scope="col">
                    <div className="d-flex flex-row-reverse">
                      <button onClick={addRow} type="button" className="btn btn-outline-dark btn-sm">
                        <span dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="19" height="19" x="0" y="0" viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g fill="#4caf50"><path d="M437.332 192H32c-17.664 0-32 14.336-32 32v21.332c0 17.664 14.336 32 32 32h405.332c17.664 0 32-14.336 32-32V224c0-17.664-14.336-32-32-32zm0 0" fill="#4caf50" data-original="#4caf50" class=""></path><path d="M192 32v405.332c0 17.664 14.336 32 32 32h21.332c17.664 0 32-14.336 32-32V32c0-17.664-14.336-32-32-32H224c-17.664 0-32 14.336-32 32zm0 0" fill="#4caf50" data-original="#4caf50" class=""></path></g></g></svg>' }} />
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map(({ symbol, period, limit, lowerThreshold, upperThreshold, gap, filtered, notify }, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}{symbol && lowerThreshold && upperThreshold ? '✅' : ''}</th>
                      <td>
                        <div className="form-group" style={{ maxWidth: '150px' }}>
                          <input value={symbol} onChange={(e) => {
                            onChange(index, 'symbol', e.target.value);
                          }} type="text" className="form-control" id="symbol" aria-describedby="symbolHelp" placeholder="symbol e.g. BTCUSDT" />
                        </div>
                      </td>
                      <td>
                        <div className="form-group">
                          <select value={period} onChange={(e) => {
                            onChange(index, 'period', e.target.value);
                          }} className="form-control" id="period">
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
                      </td>
                      <td>
                        <div className="form-group" style={{ maxWidth: '70px' }}>
                          <input value={limit} onChange={(e) => {
                            onChange(index, 'limit', e.target.value);
                          }} type="text" className="form-control" id="limit" aria-describedby="limitHelp" placeholder="limit e.g. 30" />
                        </div>
                      </td>
                      <td>
                        <div className="form-group" style={{ maxWidth: '70px' }}>
                          <input value={lowerThreshold} onChange={(e) => {
                            onChange(index, 'lowerThreshold', e.target.value);
                          }} type="text" className="form-control" id="lowerThreshold" aria-describedby="lowerThresholdHelp" placeholder="e.g. 0.8" />
                        </div>
                      </td>
                      <td>
                        <div className="form-group" style={{ maxWidth: '70px' }}>
                          <input value={upperThreshold} onChange={(e) => {
                            onChange(index, 'upperThreshold', e.target.value);
                          }} type="text" className="form-control" id="upperThreshold" aria-describedby="upperThresholdHelp" placeholder="e.g. 1.2" />
                        </div>
                      </td>
                      <td>
                        <div className="form-group" style={{ maxWidth: '150px' }}>
                          <select value={gap} onChange={(e) => {
                            onChange(index, 'gap', e.target.value);
                          }} className="form-control" id="gap">
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
                      </td>
                      <td>
                        <div className="form-group toggle-box">
                          <input checked={filtered} onChange={(e) => {
                            onChange(index, 'filtered', !filtered);
                          }} type="checkbox" className={'form-check-input'} id="filtered" />
                        </div>
                      </td>
                      <td>
                        <div className="form-group toggle-box">
                          <input checked={notify} onChange={(e) => {
                            onChange(index, 'notify', !notify);
                          }} type="checkbox" className={'form-check-input'} id="notify" />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex flex-row-reverse">
                          <button onClick={() => deleteRow(index)} type="button" className="btn btn-outline-dark btn-sm">❌</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {/* <tr>
                                    <td colSpan={10} style={{ borderBottom: 'none' }}>
                                        <div className="d-flex flex-row-reverse">
                                            <button onClick={addRow} type="button" className="btn btn-outline-dark btn-sm">
                                                <span dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="19" height="19" x="0" y="0" viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g fill="#4caf50"><path d="M437.332 192H32c-17.664 0-32 14.336-32 32v21.332c0 17.664 14.336 32 32 32h405.332c17.664 0 32-14.336 32-32V224c0-17.664-14.336-32-32-32zm0 0" fill="#4caf50" data-original="#4caf50" class=""></path><path d="M192 32v405.332c0 17.664 14.336 32 32 32h21.332c17.664 0 32-14.336 32-32V32c0-17.664-14.336-32-32-32H224c-17.664 0-32 14.336-32 32zm0 0" fill="#4caf50" data-original="#4caf50" class=""></path></g></g></svg>' }} />
                                            </button>
                                        </div>
                                    </td>
                                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-5">
          <button onClick={start} type="button" disabled={!data?.length} className="btn btn-primary btn-lg"><b>Start Monitoring 🚀</b></button>

          {closeEnabled && (
            <div className="mt-5">
              <button onClick={closeAll} disabled={!data?.length} className="btn btn-link"><b>close all open windows</b></button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const router = useRouter();

  const [status, setStatus] = useState<string>('PENDING');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    document.title = 'TEAM CRYPTO WHALE';
    const APIKEY = localStorage.getItem('APIKEY');

    if (APIKEY) {
      setStatus('LOGGED_IN');
    }
    else {
      setStatus('LOGGED_OUT');
    }
  }, []);

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
    router.replace('/login');
  }

  else if (status === 'LOGGED_IN') {
    return <QueryTable />
  }

  return null;
}