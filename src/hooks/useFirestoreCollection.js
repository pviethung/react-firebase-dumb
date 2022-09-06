import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase/config';

export const useFirestoreCollection = (collectionPath) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = async (promise) => {
    setError(null);
    setData(null);
    setIsError(false);
    setIsLoading(true);

    try {
      const res = await promise;
      setData(res);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  const addDocument = (name, amount) => {
    request(
      addDoc(collection(db, collectionPath), {
        name,
        amount,
      })
    );
  };

  return {
    data,
    isLoading,
    isError,
    error,
    addDocument,
  };
};
