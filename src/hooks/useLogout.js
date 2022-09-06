import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setIsError(false);
    setIsLoading(true);
    setError(null);

    try {
      await signOut(auth);
      dispatch({ type: 'LOGOUT' });
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    logout,
    isError,
    isLoading,
    error,
  };
};
