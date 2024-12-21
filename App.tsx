import React from 'react';
import {AppNavigation} from '@navigations';
import {AuthProvider} from '@contexts';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
