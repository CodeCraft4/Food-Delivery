import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MenueTitle, Spacer} from '@commons';
import {FoodsDealsImg1} from '@assets';
import {styles} from './styles';
import {hp, SCREEN, wp} from '@enums';
import {ORDER_AGAIN} from '@constants';
import {useNavigation} from '@react-navigation/native';

export const AgainOrders = (props: any) => {
  const {user} = props;
  const navigation = useNavigation();
  return (
    <View>
      {user ? null : (
        <MenueTitle
          title={'Order Again'}
          description={'You Ordered from 17 Restaurants'}
        />
      )}
      <Spacer height={hp(2)} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ORDER_AGAIN.map((item, i) => (
          <TouchableOpacity
            style={styles().card}
            key={i}
            onPress={() => navigation.navigate(SCREEN.ORDERS)}>
            <View style={styles().logo}>
              {user ? <FoodsDealsImg1 width={wp(20)} /> : item.logo}
              <View>
                <Text style={styles().logoTitle}>{item.title}</Text>
                <Text>{item.day}</Text>
              </View>
              {user ? null : <Text style={styles().price}>$ {item.price}</Text>}
            </View>
            <Spacer />
            <Text style={styles().desc}>{item.related}+3 more...</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
