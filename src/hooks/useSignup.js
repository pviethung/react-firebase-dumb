import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase/config';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email, password) => {
    setIsError(false);
    setIsLoading(true);
    setError(null);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    signup,
    isLoading,
    isError,
    error,
  };
};
