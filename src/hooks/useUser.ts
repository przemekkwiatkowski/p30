import {useEffect} from "react";
import LogRocket from "logrocket";

export const useUser = () => {
  const meUser = localStorage.getItem('pychu:me');

  useEffect(() => {
    if (meUser === 'true') {
      LogRocket.identify('Ja');
    }
  }, [meUser]);
};