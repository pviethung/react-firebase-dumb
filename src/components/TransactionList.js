import styles from './TransactionList.module.css';

const TransactionList = () => {
  return (
    <ul className={styles.container}>
      <li>
        <p>Ballons</p>
        <p>$20</p>
      </li>
    </ul>
  );
};

export default TransactionList;
