import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useReducer } from 'react';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

const reducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return { ...state, user: null };
  }
  if (action.type === 'LOGIN') {
    return { ...state, user: action.payload };
  }
  if (action.type === 'AUTH_CHECKED') {
    return { ...state, user: action.payload, authChecked: true };
  }

  return state;
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: null });

  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      (user) => {
        unsub();
        dispatch({ type: 'AUTH_CHECKED', payload: user });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {state.authChecked && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
