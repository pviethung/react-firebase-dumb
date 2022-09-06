import { useRef } from 'react';
import Form from '../../components/Form';
import styles from './Login.module.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <Form onSubmit={submitHandler}>
        <label>Email</label>
        <input ref={emailRef} type="text" placeholder="test@example.com" />
        <label>Password</label>
        <input ref={passwordRef} type="password" />
        <button className="btn">Login</button>
      </Form>
    </div>
  );
};

export default Login;
