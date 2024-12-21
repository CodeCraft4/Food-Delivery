import React, { useEffect, useState } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CommonButtons, DeliveryModal, Spacer, LocationModals} from '@commons';
import {hp, SCREEN, wp} from '@enums';
import {LocationPin, Logo, LookUpMap, RigthArrow} from '@assets';
import {useModal} from '@hooks';
import {styles} from './style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const WelcomeModules = () => {
  const [fullName, setFullName] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const currentUser = auth().currentUser;
    if (currentUser) {
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


  const {
    open: isLocateModal,
    closeModal: closeLocateModal,
    openModal: openLocateModal,
  } = useModal();

  const {
    open: isDeliveryModal,
    closeModal: closeDeliveryModal,
    openModal: openDeliveryModal,
  } = useModal();

  

  return (
    <View style={styles().modulesContainer}>
      <View style={styles().container}>
        <TouchableOpacity
          style={styles().skip}
          onPress={() =>
            navigation.navigate('Bottom_tab', {screen: SCREEN.HOME})
          }>
          <Text style={styles().skipText}>Skip</Text>
          <RigthArrow />
        </TouchableOpacity>
        <View style={styles().logo}>
          <Logo />
        </View>
        <Spacer height={hp(4)} />
        <Text style={styles().user}>Welcome,</Text>
        <Text style={styles().userName}>{fullName || 'User'}</Text>
        <Spacer height={hp(2)} />
        <Text style={styles().description}>
          Unlock the world of regular and rescued food by setting up your
          delivery address.
        </Text>
        <Spacer height={hp(20)} />
        <Text style={styles().location}>Select Location</Text>
        <Spacer height={hp(2)} />
        <View style={{width: wp(70)}}>
          <CommonButtons
            title="Locate me"
            icons={<LookUpMap />}
            onPress={openLocateModal}
          />
          <Spacer height={hp(2)} />
          <CommonButtons
            title="Provide delivery Location"
            icons={<LocationPin />}
            onPress={openDeliveryModal}
          />
        </View>
      </View>
      {isLocateModal && (
        <LocationModals open={isLocateModal} onClose={closeLocateModal} />
      )}

      {isDeliveryModal && (
        <DeliveryModal open={isDeliveryModal} onClose={closeDeliveryModal} />
      )}
    </View>
  );
};

export default WelcomeModules;
