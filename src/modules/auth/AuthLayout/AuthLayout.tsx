import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Logo} from '@assets';
import {hp, wp} from '@enums';
import {styles} from './styles';
import LogInForm from '../LogIn/LogInForm';
import SignUpForm from '../SignUp/SignUp';

const AuthLayout = () => {
  const [activeTab, setActiveTab] = useState('Login');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };


  return (
    <View style={styles().container}>
      <View style={styles().logoContainer}>
        <Logo width={wp(100)} height={hp(35)} />
        <View style={styles().tabs}>
          <TouchableOpacity onPress={() => handleTabChange('Login')}>
            <Text
              style={[
                styles().text,
                activeTab === 'Login' && styles().activeText,
              ]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabChange('Sign-up')}>
            <Text
              style={[
                styles().text,
                activeTab === 'Sign-up' && styles().activeText,
              ]}>
              Sign-up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles().children}>
        {activeTab === 'Login' ? <LogInForm /> : <SignUpForm />}
      </View>
    </View>
  );
};

export default AuthLayout;
