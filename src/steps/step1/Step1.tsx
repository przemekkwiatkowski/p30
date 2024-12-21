import MatrixRain from "../../matrixRain/matrixRain.tsx";
import {useState} from "react";
import {useSteps} from "../../StepsContext.tsx";
import {useSearchParams} from "react-router-dom";
import LogRocket from "logrocket";


export const Step1 = () => {
  const [, setSearchParams] = useSearchParams();
  const { setStep } = useSteps();
  const [hoverCount, setHoverCount]  = useState(0)
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const getRandomPosition = () => {
    if (hoverCount >= 3) {
      return position;
    }
    const range = Math.min(25 + (hoverCount * 5), 45); // maksymalnie 45%
    const randomOffset = () => Math.random() * range - (range / 2); // -range/2 do +range/2

    return {
      top: `${50 + randomOffset()}%`,
      left: `${50 + randomOffset()}%`
    };
  };

  const handleHover = () => {
    LogRocket.log('step 1 hover button');
    setHoverCount(prev => prev + 1);
    setPosition(getRandomPosition());
  };

  const handleClick = () => {
    LogRocket.log('step 1 click');
    setSearchParams({ step: '2' });
    setStep(2);
  };


  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div className="to-zostaw" style={{ position: 'absolute',         top: position.top,
        left: position.left, transform: 'translate(-50%, -50%)' }} onMouseEnter={handleHover} onClick={handleClick}>
      <button>dalej</button>
      </div>
      <div className="to-wypierdol" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 10}}>
        <MatrixRain/>
      </div>
  </div>
  )
}