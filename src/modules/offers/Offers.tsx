import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {HomeOutlined, ToggleButton} from '@assets';
import {SearchFilters, Spacer} from '@commons';
import {hp, wp} from '@enums';
import {styles} from './style';
import { DealsCards, ExclusiveFood } from './components';

const OffersScreen = () => {
  return (
    <ScrollView style={styles().container}>
      <Spacer />
      <View style={styles().page}>
        <View style={styles().list}>
          <HomeOutlined />
          <Spacer width={wp(3)} />
          <View>
            <Text style={styles().title}>Home</Text>
            <Text style={styles().descrip}>
              21-42-34, Banjara Hills, Hyder....
            </Text>
          </View>
        </View>
        <ToggleButton />
      </View>
      <Spacer/>
      <SearchFilters/>
      <Spacer/>
      <Text style={styles().title2}>Happy Deals</Text>
      <Text>Ralish a big bing with our biggest offers.</Text>
      <Spacer/>
      <DealsCards/>
      <Spacer/>
      <ExclusiveFood/>
      <Spacer height={hp(12)}/>
    </ScrollView>
  );
};

export default OffersScreen;
