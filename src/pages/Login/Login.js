import { useRef } from 'react';
import Form from '../../components/Form';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, isError, isLoading, error } = useLogin();

  const submitHandler = (e) => {
    e.preventDefault();
    login(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <Form onSubmit={submitHandler}>
        <label>Email</label>
        <input ref={emailRef} type="text" placeholder="test@example.com" />
        <label>Password</label>
        <input ref={passwordRef} type="password" />
        <button disabled={isLoading} className="btn">
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        {isError && <p className="error mt-5">{error.code}</p>}
      </Form>
    </div>
  );
};

export default Login;
