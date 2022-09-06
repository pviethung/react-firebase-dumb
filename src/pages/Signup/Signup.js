import { useRef } from 'react';
import Form from '../../components/Form';
import { useSignup } from '../../hooks/useSignup';
import styles from './Signup.module.css';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const displayNameRef = useRef();
  const { signup, isError, error, isLoading } = useSignup();

  const submitHandler = (e) => {
    e.preventDefault();
    signup(
      emailRef.current.value,
      passwordRef.current.value,
      displayNameRef.current.value
    );
  };

  if (error) {
    console.log(error);
  }

  return (
    <div className={styles.container}>
      <h2>Signup</h2>
      <Form onSubmit={submitHandler}>
        <label>Email</label>
        <input ref={emailRef} type="text" placeholder="test@example.com" />
        <label>Password</label>
        <input ref={passwordRef} type="password" />
        <label>Display name</label>
        <input ref={displayNameRef} type="text" />
        <button disabled={isLoading} className="btn">
          {isLoading ? 'Loading...' : 'Signup'}
        </button>
        {isError && <p className="error mt-10">{error.code}</p>}
      </Form>
    </div>
  );
};

export default Signup;
