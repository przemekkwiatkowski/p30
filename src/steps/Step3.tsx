import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import backgroundImage from './background.jpg';
import { useNavigate } from 'react-router-dom';
import LogRocket from "logrocket";



export const Step3 = () => {
  const text = "strona 160";
  const reversed = [...text].reverse().join(''); // "061 anorts"
  const correctPassword = 'HOGSMEADE';
  const navigate = useNavigate();


  useEffect(() => {
    console.info(
      `%c${reversed}`,
      "color:#ceb73f; background: #ceb73f33; font-size:1.5rem; padding:0.15rem; margin: 1rem auto; font-family: Rockwell, Tahoma, 'Trebuchet MS', Helvetica; border: 2px solid #ceb73f; border-radius: 4px; font-weight: bold; text-shadow: 1px 1px 1px #000000bf;",
    );
  }, []);

  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password: string) => {
    LogRocket.log('step 3 validate password', password);
    return password.toUpperCase() === correctPassword;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setError(''); // Czyści error przy wpisywaniu
  };

  const handleSubmit = () => {
    if (!validatePassword(value)) {
      setError('Nieprawidłowe hasło');
    } else {
      setError('');
      // Tutaj możesz dodać logikę sukcesu
      navigate('/reward-for-pychu');
      console.log('Poprawne hasło! Sztosuwa!');
    }
  };



  return (
    <div style={{width: '100%', height: '100%', position: 'relative', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

      <div style={{ padding: 70 , background: 'white', borderRadius: 12}}>

        <Stack spacing={1} direction="row">
          <TextField
            autoFocus
            label="Hasło"
            size="small"
            value={value}
            onChange={handleChange}
            error={Boolean(error)}
            helperText={error}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
          <Button variant="contained" size="small"   disabled={!value.trim()}   onClick={handleSubmit}
          >
            SUBMIT
          </Button>
        </Stack>
      </div>
  </div>
  )
}