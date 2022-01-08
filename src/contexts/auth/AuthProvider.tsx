import React, { createContext, useMemo, useState } from 'react';

interface ContextValue {
  isLoggedIn: boolean;
  login: () => void;
}

// REFACTOR: Generic type
export const Context = createContext<ContextValue | null>(null);

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const login = () => {
    setLoggedIn(true);
  };

  const contextValue: ContextValue = useMemo(() => ({ isLoggedIn, login }), [isLoggedIn]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default AuthProvider;
