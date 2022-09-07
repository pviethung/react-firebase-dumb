import { useFirestoreCollection } from '../hooks/useFirestoreCollection';
import styles from './TransactionList.module.css';

const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestoreCollection('transactions');
  return (
    <ul className={styles.container}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p>{transaction.name}</p>
          <p>${transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
