import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {CommonButtons, CustomInputs, Spacer} from '@commons';
import {COLORS, hp} from '@enums';
import {ArrowLeft, FaceBookOutline, Google} from '@assets';
import ForgottenPassword from '../ForgetPassword/ForgetPassword';
import {FormProvider, useForm} from 'react-hook-form';
import {loginSchema} from '@validations';
import {yupResolver} from '@hookform/resolvers/yup';
import auth from '@react-native-firebase/auth';
import {useAuth} from '@contexts';

interface FormValues {
  email: string;
  password: string;
}

const LogInForm = () => {
  const [isForgetPass, setIsForgetPass] = useState(false);
  const {loading, setLoading} = useAuth();
  const methods = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
  });

  const handleNext = () => {
    methods.handleSubmit(onSubmit)();
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );
      console.log('User logged in:', userCredential.user.email);
      methods.reset();
    } catch (error: any) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!isForgetPass ? (
        <>
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <FormProvider {...methods}>
              <>
                <Spacer height={hp(4)} />
                <CustomInputs
                  placeholder="User name, Mobile number"
                  name="email"
                  type="email"
                />
                <CustomInputs
                  placeholder="Password"
                  name="password"
                  type="password"
                />
                <TouchableOpacity
                  onPress={() => setIsForgetPass(!isForgetPass)}>
                  <Text style={styles.text}>Forget Password</Text>
                </TouchableOpacity>
                <Spacer height={hp(2)} />
                <CommonButtons
                  title="Login"
                  bgcolor={COLORS.primary}
                  onPress={handleNext}
                />
                <Text style={styles.text2}>Or</Text>
                <Spacer height={hp(2)} />
                <CommonButtons
                  title="Log In With Facebook"
                  icons={<FaceBookOutline />}
                  bgcolor={'#1877F2'}
                />
                <Spacer height={hp(2)} />
                <CommonButtons title="Log In With Google" icons={<Google />} />
                <Spacer height={hp(7)} />
              </>
            </FormProvider>
          )}
        </>
      ) : (
        <>
          <Spacer height={hp(5)} />
          <TouchableOpacity onPress={() => setIsForgetPass(!isForgetPass)}>
            <View>
              <ArrowLeft />
            </View>
          </TouchableOpacity>
          <ForgottenPassword />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'relative',
  },
  text: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  text2: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default LogInForm;
