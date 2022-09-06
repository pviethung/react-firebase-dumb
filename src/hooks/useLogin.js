import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase/config';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsError(false);
    setIsLoading(true);
    setError(null);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
    isError,
    error,
  };
};
