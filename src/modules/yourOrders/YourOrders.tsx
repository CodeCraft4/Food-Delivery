import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  ArrowLeft,
} from '@assets';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {Spacer} from '@commons';
import {useNavigation} from '@react-navigation/native';
import { YOURS_ORDERS } from '@constants';

const YourOrders = () => {

  const navigaiton = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigaiton.navigate(SCREEN.PROFILE)}>
        <ArrowLeft width={wp(4)} height={hp(4)} />
      </TouchableOpacity>
      <Spacer />
      <Text style={styles.title}>Your Orders</Text>
      <Spacer height={hp(3)} />
      {YOURS_ORDERS.map((item, i) => (
        <View style={styles.order} key={i}>
          <View style={styles.priceBox}>
            <View style={styles.poster}>
              {item.poster}
              <View>
                <Text style={styles.menue}>{item.title}</Text>
                <Text>{item.address}</Text>
              </View>
            </View>
            <Text style={styles.menue}>${item.price}</Text>
          </View>
          <Text>Item</Text>
          <Text style={styles.menue}>{item.Item}</Text>
          <Spacer height={hp(2)} />
          <Text>ORDERED ON</Text>
          <Text style={styles.menue}>{item.orderOn}</Text>
          <Spacer height={hp(2)} />
          <View style={styles.reject}>
            <Text>Rejected</Text>
            <Text>Repeat Order</Text>
          </View>
        </View>
      ))}
      <Spacer height={hp(10)} />
    </ScrollView>
  );
};

export default YourOrders;

const styles = StyleSheet.create({
  container: {
    padding: wp(3),
    height: hp(100),
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.black,
  },
  order: {
    borderWidth: 0.6,
    borderColor: COLORS.black,
    marginBottom: hp(2),
    padding: wp(2),
    borderRadius: 10,
  },
  priceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.black,
    borderBottomWidth: 0.6,
    paddingBottom: hp(1),
  },
  menue: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.black,
  },
  reject: {
    borderTopColor: COLORS.black,
    borderTopWidth: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp(0.5),
  },
  poster: {
    flexDirection: 'row',
    gap: wp(2),
  },
});
