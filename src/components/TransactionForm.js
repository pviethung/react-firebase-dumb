import { useEffect, useRef } from 'react';
import { useFirestoreCollection } from '../hooks/useFirestoreCollection';
import Form from './Form';

const TransactionForm = () => {
  const nameRef = useRef();
  const amountRef = useRef();
  const { addDocument, isError, isLoading, error, data } =
    useFirestoreCollection('transactions');

  const submitHandler = (e) => {
    e.preventDefault();
    addDocument(nameRef.current.value, amountRef.current.value);
  };

  useEffect(() => {
    if (data) {
      nameRef.current.focus();
      nameRef.current.value = '';
      amountRef.current.value = '';
    }
  }, [data]);

  return (
    <Form onSubmit={submitHandler}>
      <label>Transaction name:</label>
      <input ref={nameRef} type="text" />
      <label>Amount($)</label>
      <input ref={amountRef} type="number" />
      <button disabled={isLoading} className="btn">
        {isLoading ? 'Loading...' : 'Add Transaction'}
      </button>
      {isError && <p className="error mt-5">{error.code}</p>}
    </Form>
  );
};

export default TransactionForm;
