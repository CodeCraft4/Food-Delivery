import React from 'react';
import {DisscountOffer, FavoriteIcon} from '@assets';
import {MenueTitle, Spacer} from '@commons';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {COLORS, hp, SCREEN} from '@enums';
import {useNavigation} from '@react-navigation/native';
import {BREAKFAST_LUNCH} from '@constants';

export const RescueCard = (props: any) => {
  const {restourent, user} = props || {};
  const navigation = useNavigation();
  return (
    <View>
      {user ? null : (
        <MenueTitle
          title={
            restourent
              ? 'Some of them offer rescued.'
              : 'Save Rescued Food for 50%!'
          }
          description="Left over supplies and food have been used up."
          color={COLORS.secondary}
        />
      )}
      <Spacer />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {BREAKFAST_LUNCH.map((e, i) => (
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
            <View style={styles().text}>
              <Text style={styles().Foodtitle}>{e.title}</Text>
              <Text>Lorem ipsum dolor set's. </Text>
              <Spacer height={hp(6)} />
              <View style={styles().faverite}>
                <Text style={styles().price}>${e.price}</Text>
                {user ? null : (
                  <TouchableOpacity>
                    <FavoriteIcon />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
