import { useRef } from 'react';
import { useFirestoreCollection } from '../hooks/useFirestoreCollection';
import Form from './Form';

const TransactionForm = () => {
  const nameRef = useRef();
  const amountRef = useRef();
  const { addDocument, isError, data, isLoading, error } =
    useFirestoreCollection('transactions');

  const submitHandler = (e) => {
    e.preventDefault();
    addDocument(nameRef.current.value, amountRef.current.value);
  };

  if (data) {
    console.log(data);
  }

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
