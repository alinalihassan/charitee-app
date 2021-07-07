/* eslint-disable no-unused-vars */
import React from 'react';

interface AuthContextParams {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  signUp: (email: string, password: string) => Promise<void>;
  finishOnboarding: () => Promise<void>;
}

export default React.createContext<Partial<AuthContextParams>>({});
