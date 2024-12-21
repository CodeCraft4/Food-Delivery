import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BlackArrowRight, EditIcon} from '@assets';
import {styles} from './style';
import {Spacer} from '@commons';
import {hp, SCREEN} from '@enums';
import {useNavigation} from '@react-navigation/native';

const UserPerformance = () => {
  const navi = useNavigation();
  return (
    <View>
      <View style={styles().user}>
        <Text style={styles().title}>Your Preferences</Text>
        <TouchableOpacity style={styles().edits}onPress={()=>navi.navigate(SCREEN.USER_DETAILS)}>
          <Text>Edit</Text>
          <Spacer />
          <EditIcon />
        </TouchableOpacity>
      </View>
      <Spacer />
      <Text style={styles().description}>
        Now order user specific food directly below!
      </Text>
      <Spacer height={hp(3)} />
      {[1, 2, 3, 4].map((i, index) => (
        <TouchableOpacity
          style={styles().rows}
          key={index}
          onPress={() => navi.navigate(SCREEN.USERS_PREFARENCES,{i})}>
          <Text style={styles().name}>{`User ${i + 0}`}</Text>
          <BlackArrowRight />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default UserPerformance;
