import { useEffect, useState } from 'react';
import TransactionForm from '../../components/TransactionForm';
import TransactionList from '../../components/TransactionList';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestoreCollection } from '../../hooks/useFirestoreCollection';
import styles from './Home.module.css';

const Home = () => {
  const {
    user: { uid },
  } = useAuthContext();
  const {
    onSnapshotDocument,
    data: transactions,
    isError,
    error,
  } = useFirestoreCollection('transactions', {});
  const [query, setQuery] = useState({
    where: [['uid', '==', uid]],
    orderBy: ['name', 'desc'],
    limit: null,
  });

  console.log('[component rerendered]');
  if (isError) {
    console.log(error);
  }

  useEffect(() => {
    const unsub = onSnapshotDocument(query);
    return () => {
      console.log('[clean up prev observer]');
      unsub();
    };
  }, [onSnapshotDocument, query]);

  return (
    <div className="container">
      <select
        onChange={(e) => {
          setQuery((prevQuery) => ({
            ...prevQuery,
            orderBy: ['name', e.target.value],
          }));
        }}
      >
        <option value="desc">DESC</option>
        <option value="asc">ASC</option>
      </select>
      <div className={styles.container}>
        {transactions && <TransactionList transactions={transactions} />}
        <div className={styles['col-right']}>
          <h2>Add a Transaction</h2>
          <div className={styles['form-container']}>
            <TransactionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
