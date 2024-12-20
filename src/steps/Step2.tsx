import {useSearchParams} from "react-router-dom";
import {useSteps} from "../StepsContext.tsx";
import {useEffect, useState} from "react";

export const Step2 = () => {
  const { showRefresh, setShowRefresh } = useSteps();
  const [showRefreshLocal, setShowRefreshLocal] = useState(showRefresh);
  const [searchParams, setSearchParams] = useSearchParams();

  const showTips = searchParams.get('step') && !['2', 2, null, ''].includes(searchParams.get('step'))

  useEffect(() => {
    if (showTips) {
      setSearchParams({ step: 'lool-taki-chuj' });
      setShowRefresh();
      setShowRefreshLocal(true);
    } else {
      setSearchParams({ step: '2' });
    }
  }, [searchParams]);

  const refreshPage = () => {
    setSearchParams(undefined);
    const currentUrl = window.location.href;
    window.history.replaceState(null, '', currentUrl);
    window.location.reload();
  };

  return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
      <p style={{ background: 'white', padding: 0, margin: 0, color: 'black', position: 'relative', top: 200, left: 500 }}>?</p>
      {showRefreshLocal && <button style={{ background: 'lightgrey', position: 'absolute', top: '60%', left: '20%' }} onClick={refreshPage}>
        refresh
      </button>}
  </div>
  )
}