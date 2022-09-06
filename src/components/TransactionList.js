import styles from './TransactionList.module.css';

const TransactionList = ({ transactions }) => {
  return (
    <ul className={styles.container}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p>{transaction.name}</p>
          <p>${transaction.amount}</p>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
