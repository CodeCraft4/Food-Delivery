import {ArrowLeft, BlackArrowRight} from '@assets';
import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {PaymentModal, Spacer} from '@commons';
import {hp, SCREEN, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';
import {useModal} from '@hooks';
import {PAYMENT_METHODS} from '@constants';

const PaymentsMethods = () => {
  const navigation = useNavigation();
  const {
    open: isPayModal,
    closeModal: closePayModal,
    openModal: openPayModal,
  } = useModal();

  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = item => {
    setSelectedItem(item);
    openPayModal();
  };

  return (
    <View style={styles().page}>
      <View style={styles().pageTitle}>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.PROFILE)}>
          <ArrowLeft />
        </TouchableOpacity>
        <Spacer width={wp(4)} />
        <Text style={styles().pageName}>Manage Payment & Details</Text>
      </View>
      <Spacer height={hp(4)} />
      <ScrollView>
        {PAYMENT_METHODS.map((item, i) => (
          <View key={i}>
            {i === 0 && <Text style={styles().title}>Cards</Text>}
            {i === 2 && <Text style={styles().title}>UPI</Text>}
            {i === 6 && <Text style={styles().title}>Wallet</Text>}
            <Spacer />
            <TouchableOpacity
              style={styles().payout}
              onPress={() => handlePress(item)}>
              {item.payLogo}
              <Text style={styles().payName}>{item.payName}</Text>
              {i === 0 || i === 1 || i === 5 || i === 8 ? (
                <BlackArrowRight />
              ) : null}
            </TouchableOpacity>
            <Spacer />
          </View>
        ))}
      </ScrollView>
      <Spacer height={hp(7)} />

      {isPayModal && (
        <PaymentModal
          open={isPayModal}
          onClose={closePayModal}
          item={selectedItem}
        />
      )}
    </View>
  );
};

export default PaymentsMethods;
