import { BrowserRouter } from 'react-router-dom';

import './App.css'
import {Steps} from "./Steps.tsx";
import {StepsProvider} from "./StepsContext.tsx";
import {Navigate, Route, Routes} from "react-router";
import {Reward} from "./Reward.tsx";
import LogRocket from 'logrocket';
import {useUser} from "./hooks/useUser.ts";

LogRocket.init('ilhzft/p30project');

function App() {
  useUser();

  return (
    <BrowserRouter>

    <StepsProvider>
    <div style={{width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Routes>
        <Route path="/reward-for-pychu" element={<Reward />} />
        <Route path="/" element={<Steps />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    </StepsProvider>
      </BrowserRouter>
  )
}

export default App
