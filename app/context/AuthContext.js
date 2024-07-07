'use client'
import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../config/firebase'; // Import the initialized app

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userCredential, setUserCredential] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserCredential(user);
      } else {
        setUserCredential(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ userCredential, setUserCredential }}>
      {children}
    </AuthContext.Provider>
  );
};
