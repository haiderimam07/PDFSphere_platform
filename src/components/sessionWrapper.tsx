'use client'; 

import React from 'react';
import { SessionProvider } from 'next-auth/react';

// This component will wrap our entire application with the session context
const Providers = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
