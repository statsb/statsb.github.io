import { FormEvent, useEffect, useRef, useState } from 'react';
import style from './Theme.module.css';
import { useRouter } from 'next/router';

function QueryTable({ data, lowerThreshold, upperThreshold, filtered }: any) {
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

export default function Home() {
  const router = useRouter();

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
    router.replace('/login');
  }

  // else if (status === 'LOGGED_IN') {
  //   return <QueryTable />
  // }

  return null;
}