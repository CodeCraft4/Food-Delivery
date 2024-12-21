import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  AgainOrders,
  BreackFast,
  FooDeals,
  RescueCard,
  SearchFilters,
  Spacer,
} from '@commons';
import {HeartAquaIcon, HomeOutlined} from '@assets';
import {hp, SCREEN, wp} from '@enums';
import {styles} from './style';
import {ListRestourent, PerformanceCard, UserPerformance} from './components';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles().container}>
      <Spacer height={hp(4)} />
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
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREEN.USER_DETAILS)}>
          <HeartAquaIcon />
        </TouchableOpacity>
      </View>
      <Spacer height={hp(3)} />
      <SearchFilters
        onFocus={() => navigation.navigate(SCREEN.RECENT_SEARCHES)}
      />
      <PerformanceCard />
      <Spacer height={hp(3)} />
      <UserPerformance />
      <Spacer height={hp(3)} />
      <FooDeals />
      <Spacer height={hp(3)} />
      <BreackFast />
      <Spacer height={hp(5)} />
      <FooDeals dinner={true} />
      <Spacer height={hp(6)} />
      <RescueCard />
      <Spacer height={hp(4)} />
      <AgainOrders />
      <Spacer height={hp(4)} />
      <RescueCard restourent={true} />
      <Spacer height={hp(3)} />
      <ListRestourent />
      <Spacer height={hp(10)} />
    </ScrollView>
  );
};

export default Home;
