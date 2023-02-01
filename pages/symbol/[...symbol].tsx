import { FormEvent, useEffect, useRef, useState } from 'react';
import style from './Theme.module.css';
import { useRouter } from 'next/router';

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
                        <tr key={index} className={highlightedClass && !filtered ? `table-${highlightedClass}` : ''}>
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

const useParams = () => {
    const router = useRouter()
    const params = router.query?.symbol as any;

    if (params?.length) {
        return params;
    }

    return [undefined, undefined, undefined, undefined, undefined];
}

function Stats({ apikey, params }: any) {
    const LOWER_THRESHOLD = 0.8;
    const UPPER_THRESHOLD = 1.2;

    const { _symbol, _period, _limit, _lowerThreshold, _upperThreshold, _gap, _filtered, _notify } = params;

    const [loading, setLoading] = useState<boolean>(false);
    const [symbol, setSymbol] = useState<string>(_symbol ?? 'BTCUSDT');
    const [period, setPeriod] = useState<string>(_period ?? '5m');
    const [limit, setLimit] = useState<number>(_limit ?? 30);
    const [lowerThreshold, setLowerThreshold] = useState<number>(_lowerThreshold ?? LOWER_THRESHOLD);
    const lowerThresholdRef = useRef(_lowerThreshold ?? LOWER_THRESHOLD);
    const [upperThreshold, setUpperThreshold] = useState<number>(_upperThreshold ?? UPPER_THRESHOLD);
    const upperThresholdRef = useRef(_upperThreshold ?? UPPER_THRESHOLD);
    const [gap, setGap] = useState<number>(_gap ?? 5);
    const gapRef = useRef(_gap ?? 5);
    const [timer, setTimer] = useState<number>(0);
    const timerRef = useRef(0);
    const timeoutRef = useRef<any>(null);
    const [filtered, setFiltered] = useState<boolean>(_filtered === '1' ?? true);
    const [notify, setNotify] = useState<boolean>(_notify === '1' ?? false);
    const notifyRef = useRef(_notify === '1' ?? false);
    const [data, setData] = useState([]);

    const onFilterChange = () => {
        setFiltered(!filtered);
    }

    const onNotifyChange = () => {
        notifyRef.current = !notify;
        setNotify(!notify);
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

    const playAudio = () => {
        (document.getElementById('audio') as any)?.play();
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

            if (notifyRef.current && (lowerHighlightsCount > 0 || upperHighlightsCount > 0)) {
                playAudio();
            }
        }
    }

    const delay = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const fetchData = async () => {
        clearTimeout(timeoutRef.current);
        await delay(0);
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
            <nav className="navbar navbar-dark bg-dark mb-5 p-3 shadow-sm">
                <div className="container-fluid">
                    <strong className="navbar-brand">statsb.github.io</strong>
                    <div className="d-flex">
                        <button className="btn btn-outline-warning" onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-sm-4 mb-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Taker Buy/Sell Volume</h5>
                                <h6 className="card-subtitle mb-4 text-muted">
                                    <code>GET /futures/data/takerlongshortRatio</code>
                                </h6>

                                <form onSubmit={onSubmit}>
                                    <div className="row">
                                        <div className="col-6 form-group mb-3">
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

                                    <div className="d-grid mt-3 mb-5">
                                        <button disabled={loading} type="submit" className="btn btn-block btn-warning mb-2">Submit</button>
                                    </div>

                                    {!!data?.length && (
                                        <div className="row">
                                            <div className="col-sm mb-3">
                                                <div className="progress" style={{ height: '30px' }}>
                                                    <div
                                                        className="progress-bar progress-bar-striped progress-bar-animated"
                                                        role="progressbar"
                                                        aria-valuenow={75}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{ width: `${Math.floor((timer / (gap * 60)) * 100)}%` }}
                                                    >
                                                        <b className={style.progressFont}>{timer}s</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="row">
                                        <div className="col form-group mb-3">
                                            <label htmlFor="gap">Refresh every:</label>
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
                                    </div>

                                    <div className="row">
                                        <div className="col form-group toggle-box">
                                            <label className={'form-check-label'} htmlFor="filtered">Filter</label>
                                            <br />
                                            <input checked={filtered} onChange={onFilterChange} type="checkbox" className={'form-check-input'} id="filtered" />
                                        </div>
                                        <div className="col form-group toggle-box">
                                            <label className={'form-check-label'} htmlFor="filtered">Notify</label>
                                            <br />
                                            <input checked={notify} onChange={onNotifyChange} type="checkbox" className={'form-check-input'} id="notify" />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1" />
                    <div className={style.scrollable + ' col-sm-7'}>
                        <div className={style.relative}>
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
                            {!!data && !data.length && !loading && (<div className={style.mt100 + ' text-muted text-center'}>[No data]</div>)}
                            <audio src="https://cdn.pixabay.com/download/audio/2021/08/09/audio_9f35254621.mp3?filename=notification-sound-7062.mp3" id="audio" controls style={{ display: 'none' }} />
                        </div>
                    </div>
                </div >
            </div >


        </>
    )
}

export default function Home() {
    const router = useRouter();

    const [status, setStatus] = useState<string>('PENDING');
    const [apikey, setApikey] = useState<string>('');

    const [_symbol, _period, _limit, _lowerThreshold, _upperThreshold, _gap, _filtered, _notify] = useParams();
    const params = { _symbol, _period, _limit, _lowerThreshold, _upperThreshold, _gap, _filtered, _notify };

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
        // return <Login />
        router.replace('/login');
    }

    else if (status === 'LOGGED_IN' && _symbol) {
        return <Stats apikey={apikey} params={params} />
    }

    return null;
}