import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useCallback, useState } from 'react';
import { db } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useFirestoreCollection = (collectionPath) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { user } = useAuthContext();

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
        uid: user.uid,
      })
    );
  };

  const onSnapshotDocument = useCallback(() => {
    const q = query(
      collection(db, collectionPath),
      where('uid', '==', user.uid)
    );
    return onSnapshot(q, (snapshot) => {
      const transactions = [];
      snapshot.forEach((doc) => {
        transactions.push({ ...doc.data(), id: doc.id });
      });

      setData(transactions);
    });
  }, [collectionPath, user.uid]);

  return {
    data,
    isLoading,
    isError,
    error,
    onSnapshotDocument,
    addDocument,
  };
};
