import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

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
          <>
            <li>
              <p>Hello, {user.displayName}</p>
            </li>
            <li>
              <button onClick={() => logout()} className="btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
