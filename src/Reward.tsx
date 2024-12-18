import Confetti from 'react-confetti'
import './Reward.css'
import Button from "@mui/material/Button";


export const Reward = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      position: 'relative',
      background: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <Confetti/>

      <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 70, gap: 100 }}>

      <div className="content">
        <h1 className="title">gratulacje Pysiu!
          <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
          </div>
        </h1>
      </div>

      <Button variant="contained" href="https://drive.google.com/drive/folders/1vdArwHe4T-tjRpc-U0MYEFQDqUdLCock?usp=sharing" target={"_blank"}>ODBIERZ NAGRODĘ</Button>
      </div>
    </div>
  )
}