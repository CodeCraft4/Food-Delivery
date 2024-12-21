import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Spacer} from '@commons';
import {COLORS} from '@enums';
import {OfferLunch3} from '@assets';

const ExclusiveFood = () => {
  return (
    <View>
      <Spacer />
      <Text style={styles.title2}>Exclusive on FastFood</Text>
      <Text>Delicoi's offers from top brand!</Text>
      <Spacer />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <OfferLunch3 />
        <OfferLunch3 />
      </ScrollView>
    </View>
  );
};

export default ExclusiveFood;

const styles = StyleSheet.create({
  title2: {
    fontSize: 25,
    fontWeight: '900',
    color: COLORS.black,
  },
});
