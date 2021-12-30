import { useContext } from 'react';

import { Context } from './AuthProvider';

const useAuth = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('AuthProvider 내부에서만 useAuth hook을 사용할 수 있습니다.');
  }

  return context;
};

export default useAuth;
