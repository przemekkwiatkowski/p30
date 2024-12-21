import {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import LogRocket from "logrocket";

type StepsContextValue = {
  step: number;
  setStep: (step: number | ((prev: number) => number)) => void;
  showRefresh: boolean
  setShowRefresh: () => void
};

const StepsContext = createContext<StepsContextValue>({
  step: 1,
  setStep: () => {},
  showRefresh: false,
  setShowRefresh: () => {},
});

type StepsProviderProps = {
  children: ReactNode;
};

const key = 'pychu:moze-tu-zmien-step'

export const StepsProvider = ({ children }: StepsProviderProps) => {
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem(key);
    return savedStep ? Math.min(parseInt(savedStep), 3) : 1;
  });
  const [showRefresh, setStateShowRefresh] = useState(() => {
    const show = localStorage.getItem('pychu:showRefresh');
    return show === 'true';
  });

  useEffect(() => {
    LogRocket.log('step', step);
    localStorage.setItem(key, step.toString());
  }, [step]);

  return (
    <StepsContext.Provider value={{ step, setStep, showRefresh, setShowRefresh: () => {
        setStateShowRefresh(true);
        LogRocket.log('show refresh', true);
        localStorage.setItem('pychu:showRefresh', 'true');
      } }}>
      {children}
    </StepsContext.Provider>
  );
};

export const useSteps = () => {
  const context = useContext(StepsContext);

  if (!context) {
    throw new Error('useSteps must be used within StepsProvider');
  }

  return context;
};