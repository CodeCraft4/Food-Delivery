import React from 'react';
import {ArrowLeft} from '@assets';
import {Spacer} from '@commons';
import {COLORS, hp, SCREEN, wp} from '@enums';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN.PROFILE)}>
          <ArrowLeft />
        </TouchableOpacity>
      </View>
      <Spacer height={hp(2)} />
      <Text style={styles.pageName}>Setting</Text>
      <Spacer height={hp(4)} />
      <View>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate(SCREEN.BOOKMARKS)}>
          <Text style={styles.text}>Add a Place</Text>
          <Text style={styles.description}>
            In case we are missing some thing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate(SCREEN.BOOKMARKS)}>
          <Text style={styles.text}>Place you've added</Text>
          <Text style={styles.description}>
            See all the placed you've added
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate(SCREEN.EDITS_USERS_ACCOUNT)}>
          <Text style={styles.text}>Edits Profile</Text>
          <Text style={styles.description}>
            Change your name, description and photoes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate(SCREEN.NOTIFICATIONS)}>
          <Text style={styles.text}>Notification Setting</Text>
          <Text style={styles.description}>
            Define what alert and notification you want to see
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate(SCREEN.PROFILE)}>
          <Text style={styles.text}>Account Setting</Text>
          <Text style={styles.description}>
            Change your email, delete account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

export const styles = StyleSheet.create({
  page: {
    padding: wp(3),
    marginTop: hp(2),
    flex: 1,
  },
  pageName: {
    color: COLORS.black,
    fontWeight: '400',
    fontSize: 24,
    letterSpacing: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
    cursor: 'pointer',
  },
  list: {
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.gray,
    padding: 2,
    margin: wp(2),
  },
  description: {
    fontSize: 13,
    color: COLORS.black,
    paddingBottom: 3,
  },
});
