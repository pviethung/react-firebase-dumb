import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const reducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return { ...state, user: null };
  }
  if (action.type === 'LOGIN') {
    return { ...state, user: action.payload };
  }

  return state;
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: null });

  if (state.user) {
  }

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
