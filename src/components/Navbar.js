import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <nav className={`${styles.container}`}>
      <ul className="container">
        <li>MyMoney</li>

        {!user?.displayName && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user?.displayName && (
          <li>
            <button className="btn">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
