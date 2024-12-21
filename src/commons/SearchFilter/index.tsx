import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CustomInputs, Spacer} from '@commons';
import {Filter, Search} from '@assets';
import {COLORS, hp, wp} from '@enums';
import {FormProvider, useForm} from 'react-hook-form';

export const SearchFilters = (props: any) => {
  const {onFocus} = props;
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <CustomInputs
          placeholder="Search food "
          icons={<Search />}
          name="search"
          onFocus={onFocus}
          type={'search'}
        />
        <Spacer width={wp(5)} />
        <TouchableOpacity style={styles.filter}>
          <Filter />
        </TouchableOpacity>
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  filter: {
    backgroundColor: COLORS.white,
    width: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    height: hp(8),
  },
});
