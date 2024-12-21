import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Spacer} from '@commons';
import {DINNER_FOOD_DEALS, FOOD_DEALS} from '@constants';

type Props = {
  dinner?: boolean;
};

export const FooDeals = (props: Props) => {
  const {dinner} = props;

  const data = dinner ? DINNER_FOOD_DEALS : FOOD_DEALS;
  return (
    <View style={styles().container}>
      {data.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => Alert.alert(`${item.title} is your deals.`)}>
          {item.poster}
          <Spacer />
          <Text style={styles().title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
