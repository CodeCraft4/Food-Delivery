import {AgainOrders, FooDeals, RescueCard, Spacer} from '@commons';
import {COLORS, hp, wp} from '@enums';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FavoriteCurations = () => {
  return (
    <View>
      <Text style={styles.title}>Favourite Curations:</Text>
      <Spacer height={hp(1)} />
      <View style={styles.line}>
        <FooDeals />
      </View>
      <Spacer height={hp(1)} />
      <Text style={styles.title}>Favourite Dishes:</Text>
      <View style={styles.line}>
        <AgainOrders user={true} />
      </View>
      <Spacer height={hp(1)} />
      <Text style={styles.title}>Recent Orders:</Text>
      <View style={styles.line}>
        <RescueCard user={true} />
      </View>
      <Spacer height={hp(10)} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.black,
  },
  line: {
    paddingBottom: hp(6),
    borderBottomWidth: 3,
    borderBottomColor: COLORS.gray,
    padding: wp(2),
  },
});
