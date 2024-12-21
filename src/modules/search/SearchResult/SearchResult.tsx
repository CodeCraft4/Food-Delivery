import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {SearchFilters, Spacer} from '@commons';
import {Dinner} from '@assets';
import {useNavigation} from '@react-navigation/native';

const SearchResults = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Spacer height={hp(5)} />
      <View style={{width: wp(90)}}>
        <SearchFilters />
      </View>
      <Spacer height={hp(10)} />
      <View style={styles.insideContainer}>
        <ScrollView>
          <FlatList
            data={[
              {
                poster: <Dinner />,
                name: 'Fried Rice',
                price: 30,
                type: 'Dish',
              },
              {
                poster: <Dinner />,
                name: 'Fried Rice',
                price: 20,
                type: 'Madchal',
              },
              {
                poster: <Dinner />,
                name: 'Fried Chainese Fast Food Center',
                price: 50,
                type: 'Dish',
              },
              {
                poster: <Dinner />,
                name: 'Chainese Hub',
                price: 35,
                type: 'Kukutpaly',
              },
              {
                poster: <Dinner />,
                name: 'Pista House',
                price: 33,
                type: 'Kukutpaly',
              },
              {
                poster: <Dinner />,
                name: 'Fried Chicken',
                price: 80,
                type: 'Dish',
              },
              {
                poster: <Dinner />,
                name: 'Fried Rice & Noodle',
                price: 37,
                type: 'Dish',
              },
              {
                poster: <Dinner />,
                name: 'Fried Rice',
                price: 36,
                type: 'Dish',
              },
              {
                poster: <Dinner />,
                name: 'Veg Fried Rice',
                price: 46,
                type: 'Dish',
              },
              {
                poster: <Dinner />,
                name: 'Fried Rice',
                price: 60,
                type: 'Dish',
              },
            ]}
            renderItem={({item, index}: any) => (
              <TouchableOpacity
                style={styles.item}
                key={index}
                onPress={() =>
                  nav.navigate('Bottom_tab', {
                    screen: SCREEN.CART,
                    params: {
                      object: item,
                    },
                  })
                }>
                {item.poster}
                <Spacer width={wp(3)} />
                <View>
                  <Text style={styles.itemText1}>{item.name}</Text>
                  <Text>{item.type}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  insideContainer: {
    backgroundColor: COLORS.white,
    width: wp(100),
    height: hp(75),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    marginBottom: wp(2),
    width: wp(90),
    cursor: 'pointer',
    alignItems: 'center',
  },
  itemText1: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
});
