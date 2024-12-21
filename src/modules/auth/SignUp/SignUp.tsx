import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CommonButtons, CustomInputs, Spacer} from '@commons';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {styles} from './style';
import {Facebook, Google} from '@assets';
import {FormProvider, useForm} from 'react-hook-form';
import {signUpSchema} from '@validations';
import {yupResolver} from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

interface FormValues {
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const SignUpForm = () => {
  const navigation = useNavigation();

  const methods = useForm<FormValues>({
    resolver: yupResolver(signUpSchema),
  });

  const saveUserToFirestore = async (
    userId: string,
    fullName: string,
    email: string,
  ) => {
    try {
      await firestore().collection('Users').doc(userId).set({
        fullName,
        email,
      });
      console.log('User details saved to Firestore');
    } catch (error) {
      console.error('Error saving user to Firestore:', error);
    }
  };

  const signUpWithEmail = async (
    email: string,
    password: string,
    fullName: string,
  ) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('User registered with email:', userCredential.user.email);

      await saveUserToFirestore(userCredential.user.uid, fullName, email);

      navigation.navigate(SCREEN.WELCOME_MODULES);
      methods.reset();
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log('Submitted Data:', data);
    signUpWithEmail(data.email, data.password, data.fullName);
  };

  const handleNext = () => {
    methods.handleSubmit(onSubmit)();
  };

  return (
    <FormProvider {...methods}>
      <Spacer height={hp(2)} />
      <View style={styles().container}>
        <Text style={styles().title}>Register</Text>
        <Spacer width={wp(28)} />
        <View style={styles().btnContainer}>
          <TouchableOpacity style={styles().button}>
            <Google />
          </TouchableOpacity>
          <Spacer width={wp(3)} />
          <TouchableOpacity style={styles().button}>
            <Facebook />
          </TouchableOpacity>
        </View>
      </View>
      <Spacer height={hp(2)} />
      <CustomInputs placeholder="Full Name" name="fullName" type="text" />
      <CustomInputs placeholder="Email" name="email" type="email" />
      <CustomInputs placeholder="Password" name="password" type="password" />
      <CustomInputs
        placeholder="Confirm Password"
        name="confirmPassword"
        type="password"
      />
      <View style={styles().account}>
        <View style={styles().insideBtn}>
          <CommonButtons
            title="sign-up"
            bgcolor={COLORS.primary}
            onPress={handleNext}
          />
        </View>
        <Spacer width={wp(8)} />
        <View style={styles().member}>
          <Text>
            Already a Member? <Text style={{fontWeight: '600'}}>Login</Text>{' '}
          </Text>
        </View>
      </View>
      <Spacer height={hp(8)} />
    </FormProvider>
  );
};

export default SignUpForm;
