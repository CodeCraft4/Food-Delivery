import {SCREEN} from '@enums';
import auth from '@react-native-firebase/auth';

export interface FormValues {
  email: string;
  password: string;
}

// loginAuth ...
export const loginAuth = async (data: FormValues) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    console.log('User logged in:', userCredential.user.email);
  } catch (error: any) {
    console.error('Login failed:', error.message);
  }
};

// SignUpAuth ...
export const signUpAuth = async (data: any, navigation: any) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      data.email,
      data.password,
    );
    console.log('User registered with email:', userCredential.user.email);
    navigation.navigate(SCREEN.WELCOME_MODULES);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
