import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {UserAvater} from '@assets';
import {Spacer} from '@commons';
import {SCREEN, wp} from '@enums';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const UsersDetails = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      setEmail(currentUser.email);
      const fetchUserDetails = async () => {
        try {
          const userDoc = await firestore().collection('Users').doc(currentUser.uid).get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setFullName(userData?.fullName || '');
          }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchUserDetails();
    }
  }, []);

  return (
    <View style={styles().container}>
      <View style={styles().user}>
        <TouchableOpacity onPress={()=>navigation.navigate(SCREEN.EDITS_USERS_ACCOUNT)}>
          <UserAvater />
        </TouchableOpacity>
        <Spacer width={wp(4)} />
        <View>
          <Text style={styles().title}>{fullName || 'User'}</Text>
          <Text style={styles().input}>{email || 'user@gmail.com'}</Text>
          <Spacer />
          <Text style={styles().address}>
            #21-22-31, Masab Tank, Hyderabad.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UsersDetails;
