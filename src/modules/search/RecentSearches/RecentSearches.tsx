import React from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {SearchFilters, Spacer} from '@commons';
import {hp, SCREEN, wp} from '@enums';
import {Dinner, Search} from '@assets';
import {useNavigation} from '@react-navigation/native';

const RecentSearches = () => {
  const nav = useNavigation();
  return (
    <View style={styles().container}>
      <Spacer height={hp(3)} />
        <SearchFilters onFocus={() => nav.navigate(SCREEN.SEARCH)} />
      <View style={styles().insideContainer}>
        <Text style={styles().title}>RecentSearches</Text>
        <Spacer height={hp(3)} />
        <FlatList
          data={[
            {key: 'Pizza'},
            {key: 'Pizza Hut'},
            {key: 'Chocolate Waffles'},
          ]}
          renderItem={({item, index}: any) => (
            <TouchableOpacity style={styles().item} key={index}>
              <Search />
              <Spacer width={wp(3)} />
              <Text style={styles().itemText}>{item.key}</Text>
            </TouchableOpacity>
          )}
        />
        <Spacer height={hp(6)} />
        <Text style={styles().title}>Popular Cuisines</Text>
        <Spacer height={hp(3)} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles().dinner}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(e => (
              <View style={styles().dinnerFood}>
                <Dinner />
                <Spacer height={hp(2)} />
                <Text style={styles().dinnerTitle}>{`Dinners ${e + 1} `}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RecentSearches;
