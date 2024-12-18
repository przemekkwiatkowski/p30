import {Step1} from "./steps/step1/Step1.tsx";
import {useSteps} from "./StepsContext.tsx";
import {Step2} from "./steps/Step2.tsx";
import {Step3} from "./steps/Step3.tsx";

export const Steps = () => {
  const { step } = useSteps();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
    }
  };


  return <>
    {renderStep()}
  </>

}