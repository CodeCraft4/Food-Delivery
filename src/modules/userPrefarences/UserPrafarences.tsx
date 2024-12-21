import React from 'react';
import {BackArrow, HeartAquaIcon, HomeOutlined} from '@assets';
import {Spacer} from '@commons';
import {hp, SCREEN, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import { FavoriteCurations } from './components';

const UserPrafarences = ({route}) => {
    const {i} = route?.params || {}
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
      <View
        style={styles().prefer}>
        <TouchableOpacity style={styles().back} onPress={() => navigation.navigate(SCREEN.HOME)}>
          <BackArrow width={wp(4)} height={hp(5)} />
          <Text style={styles().prefer}>Your Prefarences</Text>
        </TouchableOpacity>
      </View>
      <Spacer height={hp(3)} />
      <View style={styles().maximun}>
        <Text style={styles().set}>
          {`User${i}`}
        </Text>
      </View>
      <Spacer height={hp(2)}/>
      <View style={styles().userName}>
         <Text style={styles().userName}>Name:</Text>
        <Text style={styles().descrip}>{`User${i}`}</Text>
      </View>
      <Spacer height={hp(2)}/>
      <FavoriteCurations/>
    </ScrollView>
  );
};

export default UserPrafarences;
