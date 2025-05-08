'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    if (isLoggingOut) return;
    
    setIsLoggingOut(true);
    try {
      await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Refresh the page to trigger re-authentication
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoggingOut}
      className="fixed bottom-4 right-4 bg-gray-800 text-white text-xs p-2 rounded-md hover:bg-gray-700 z-50 opacity-80 hover:opacity-100 transition-opacity"
    >
      {isLoggingOut ? 'Logging out...' : 'Logout'}
    </button>
  );
}