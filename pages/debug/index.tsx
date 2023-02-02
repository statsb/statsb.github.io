import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


function QueryTable() {
    const [data, setData] = useState([{
        symbol: 'BTCUSDT', period: '5m', limit: 30, lowerThreshold: 0.8, upperThreshold: 1.2, gap: 5, filtered: true, notify: false
    }]);

    const addRow = () => {
        const dataClone = JSON.parse(JSON.stringify(data));
        dataClone.push({
            symbol: '', period: '5m', limit: 30, lowerThreshold: '', upperThreshold: '', gap: 5, filtered: true, notify: false
        });

        setData(dataClone);
    };

    const onChange = (index: number, key: string, value: any) => {
        const dataClone = JSON.parse(JSON.stringify(data));

        dataClone[index][key] = value;
        setData(dataClone);
    };

    const logout = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem('APIKEY');
            window.location.reload();
        }
    }

    const start = () => {
        // let urls: any = [];

        data.forEach(({ symbol, period, limit, lowerThreshold, upperThreshold, gap, filtered, notify }: any) => {
            if (!symbol || !lowerThreshold || !upperThreshold) {
                return;
            }
            window.open(`/query#/${symbol}/${period}/${limit}/${lowerThreshold}/${upperThreshold}/${gap}/${Number(filtered)}/${Number(notify)}`, '_blank');
            // console.log(`/query#/${symbol}/${period}/${limit}/${lowerThreshold}/${upperThreshold}/${gap}/${Number(filtered)}/${Number(notify)}`, '_blank');
        });

        // console.log(urls);
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark mb-5 p-3 shadow-sm">
                <div className="container-fluid">
                    <strong className="navbar-brand">statsb.github.io</strong>
                    <div className="d-flex">
                        <button className="btn btn-outline-warning" onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="d-flex flex-row-reverse mb-4">
                    <button onClick={addRow} type="button" className="btn btn-outline-dark">➕ <b>Add row</b></button>
                </div>

                <div className="row">
                    <div className="col">
                        <table className="table table-lg">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Period</th>
                                    <th scope="col">Limit</th>
                                    <th scope="col">Lower Threshold</th>
                                    <th scope="col">Upper Threshold</th>
                                    <th scope="col">Refresh Interval</th>
                                    <th scope="col">Filtered</th>
                                    <th scope="col">Notify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(({ symbol, period, limit, lowerThreshold, upperThreshold, gap, filtered, notify }, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{symbol && lowerThreshold && upperThreshold ? '✅' : ''}</th>
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
                                                <div className="form-group" style={{ maxWidth: '150px' }}>
                                                    <input value={lowerThreshold} onChange={(e) => {
                                                        onChange(index, 'lowerThreshold', e.target.value);
                                                    }} type="text" className="form-control" id="lowerThreshold" aria-describedby="lowerThresholdHelp" placeholder="e.g. 0.8" />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="form-group" style={{ maxWidth: '150px' }}>
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
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="d-flex flex-row-reverse mt-5">
                    <button onClick={start} type="button" className="btn btn-primary"><b>Start Monitoring 🚀</b></button>
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