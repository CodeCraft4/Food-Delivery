import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {CommonButtons, CustomInputs, Spacer} from '@commons';
import {COLORS, hp, SCREEN} from '@enums';
import {styles} from './style';
import {Email, RigthArrow} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {FormProvider, useForm} from 'react-hook-form';

interface FormValues {
  email: string;
}
const ForgottenPassword = () => {
  const navigation = useNavigation();
  const methods = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Simulate password reset email sending
    Alert.alert(`The verification code sent to ${data.email}`);
    // Delay before navigating back to login or welcome screen
    setTimeout(() => {
      navigation.navigate(SCREEN.WELCOME_MODULES);
    }, 2000);
  };

  const handleNext = () => {
    methods.handleSubmit(onSubmit)();
  };

  return (
    <FormProvider {...methods}>
      <Spacer height={hp(2)} />
      <Text style={styles().title}>Forgot password?</Text>
      <Spacer height={hp(3)} />
      <CustomInputs
        placeholder="Enter your email address"
        icons={<Email />}
        name="email"
      />
      <Spacer height={hp(1)} />
      <Text>
        * We will send you a message to set or reset your new password
      </Text>
      <Spacer height={hp(5)} />
      <TouchableOpacity
        onPress={handleNext}>
        <Text style={styles().send}>Send Code</Text>
      </TouchableOpacity>
      <View style={styles().arrowBtn}>
        <CommonButtons
          icons={<RigthArrow />}
          bgcolor={COLORS.primary}
          onPress={handleNext}
        />
      </View>
      <Spacer height={hp(5)} />
    </FormProvider>
  );
};

export default ForgottenPassword;
