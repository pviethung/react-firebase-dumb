import TransactionForm from '../../components/TransactionForm';
import TransactionList from '../../components/TransactionList';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className="container">
      <div className={styles.container}>
        <TransactionList />
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
