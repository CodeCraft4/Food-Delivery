import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SearchFilters, Spacer} from '@commons';
import {COLORS, hp, wp} from '@enums';
import RecentSearches from './RecentSearches/RecentSearches';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer height={hp(5)} />
      <View style={styles.filter}>
        <SearchFilters />
      </View>
      <Spacer height={hp(3)} />
      <View style={styles.insideContainer}>
        <Spacer height={hp(4)} />
        <RecentSearches />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: hp(100),
    alignItems: 'center',
  },
  filter: {
    width: wp(90),
  },
  insideContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: COLORS.white,
    width: wp(100),
    height: hp(100),
  },
});
