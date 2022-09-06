import { useEffect } from 'react';
import TransactionForm from '../../components/TransactionForm';
import TransactionList from '../../components/TransactionList';
import { useFirestoreCollection } from '../../hooks/useFirestoreCollection';
import styles from './Home.module.css';

const Home = () => {
  const { onSnapshotDocument, data: transactions } =
    useFirestoreCollection('transactions');

  useEffect(() => {
    const unsub = onSnapshotDocument();
    return () => unsub();
  }, [onSnapshotDocument]);

  return (
    <div className="container">
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
