'use client';

import { useEffect, useState } from 'react';
import PasswordProtect from './PasswordProtect';
import LogoutButton from './LogoutButton';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  useEffect(() => {
    // Check if middleware has marked this request as unauthenticated
    const isUnauthenticated = document.cookie.indexOf('ada-authentication=authenticated') === -1;
    
    // Check for custom meta tag added by server component
    const metaElement = document.querySelector('meta[name="x-auth-required"]');
    const authRequired = metaElement && metaElement.getAttribute('content') === 'true';
    
    if (isUnauthenticated && authRequired) {
      setIsAuthenticated(false);
    }
  }, []);
  
  if (!isAuthenticated) {
    return <PasswordProtect />;
  }
  
  return (
    <>
      {children}
      <LogoutButton />
    </>
  );
}