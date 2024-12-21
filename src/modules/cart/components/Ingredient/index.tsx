import React from 'react';
import {Spacer} from '@commons';
import {COLORS, hp, wp} from '@enums';
import {StyleSheet, Text, View} from 'react-native';
import { INGREDIENTS } from '@constants';

const Ingredients = () => {

  const width = 70;
  const height = 55;

  return (
    <View style={styles.container}>
      <Text style={styles.ingredient}>Ingredient</Text>
      <Spacer />
      <View style={styles.menue}>
        {INGREDIENTS.map((e, i) => (
          <View key={i}>
            {e ? React.cloneElement(e, {width: width, height: height}) : null}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menue: {
    flexDirection: 'row',
    gap: wp(3),
    width: wp(90),
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 3,
    borderRadius: 20,
    shadowColor: 'black',
    padding: hp(2),
  },
  ingredient: {
    color: COLORS.secondary,
    fontWeight: '600',
    fontSize: 18,
  },
});
