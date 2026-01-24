import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const token = Cookies.get('token');
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    Cookies.remove('token');
    router.push('/authorization');
  };

  return { isLoggedIn, logout };
};

export { useAuth };
