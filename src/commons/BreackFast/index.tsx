import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {BrackFastImg1, BrackFastImg2, DisscountOffer} from '@assets';
import {Spacer} from '@commons';
import {hp, SCREEN} from '@enums';
import {useNavigation} from '@react-navigation/native';

export const BreackFast = () => {
  const navigation = useNavigation();
  const breakfast = [
    {
      poster: <BrackFastImg1 />,
      title: 'Cappuccino',
      price: 20,
    },
    {
      poster: <BrackFastImg2 />,
      title: 'Egg & Cheese',
      price: 40,
    },
    {
      poster: <BrackFastImg1 />,
      title: 'Fast Food',
      price: 50,
    },
    {
      poster: <BrackFastImg2 />,
      title: 'Some things',
      price: 60,
    },
  ];

  return (
    <View style={styles().container}>
      <Text style={styles().title}>
        Looking For <Text style={styles().breakfast}>BreakFast?</Text>{' '}
      </Text>
      <Text>Here’s what you might like to taste</Text>
      <Spacer height={hp(3)} />
      <ScrollView
        horizontal={true}
        style={styles().scrollView}
        showsHorizontalScrollIndicator={false}>
        {breakfast.map((e, i) => (
          <TouchableOpacity
            style={styles().card}
            key={i}
            onPress={() => navigation.navigate(SCREEN.CART, {item: e})}>
            {e.poster}
            {i === 1 || i === 2 ? (
              <View style={styles().disscount}>
                <DisscountOffer />
                <Text style={styles().disscountTitle}>25% OFF</Text>
              </View>
            ) : null}
            {i === 1 && <Text style={styles().delivery}>Free Delivery</Text>}
            <Spacer height={hp(3)} />
            <Text style={styles().Foodtitle}>{e.title}</Text>
            <Text>Lorem ipsum dolor set's. </Text>
            <Spacer height={hp(3)} />
            <Text style={styles().price}>${e.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
