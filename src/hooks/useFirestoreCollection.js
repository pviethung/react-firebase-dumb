import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase/config';

export const useFirestoreCollection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = async (requestFn) => {
    setError(null);
    setData(null);
    setIsError(false);
    setIsLoading(true);

    try {
      const res = await requestFn();
      setData(res);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  const addDocument = request((name, amount) =>
    addDoc(collection(db, 'transactions'), {
      name,
      amount,
    })
  );

  return {
    data,
    isLoading,
    isError,
    error,
    addDocument,
  };
};
