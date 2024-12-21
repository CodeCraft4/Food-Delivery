import React from 'react';
import AuthLayout from './AuthLayout/AuthLayout';
import LogInForm from './LogIn/LogInForm';
import SignUpForm from './SignUp/SignUp';

const AuthScreen = () => {
  return (
    <AuthLayout>
      <LogInForm/>
      <SignUpForm/>
    </AuthLayout>
  );
};

export default AuthScreen;

