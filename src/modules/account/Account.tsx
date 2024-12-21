import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {CommonButtons, Spacer} from '@commons';
import {COLORS, hp, SCREEN} from '@enums';
import {UsersDetails} from './components';
import {BlackArrowRight, FavoriteIcon} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '@contexts';

const Account = () => {
  const {signOut} = useAuth();
  const navigation = useNavigation();

  const tags = ['Bookmark', 'Notification', 'Settings', 'Payments'];
  const list = ['Your Orders', 'Feedback & Refunds', 'My Preferences', 'Help'];

  const handleTagPress = index => {
    if (index === 3) {
      navigation.navigate('Bottom_tab', {screen: SCREEN.PAYMENTS});
    } else if (index === 2) {
      navigation.navigate('Bottom_tab', {screen: SCREEN.SETTINGS});
    } else if (index === 1) {
      navigation.navigate('Bottom_tab', {screen: SCREEN.NOTIFICATIONS});
    } else if (index === 0) {
      navigation.navigate('Bottom_tab', {screen: SCREEN.BOOKMARKS});
    }
  };

  const handleLogoutFn = async () => {
    await signOut();
    navigation.navigate(SCREEN.AUTH)
  };

  return (
    <ScrollView style={styles().container}>
      <View style={styles().personal}>
        <Text style={styles().title}>Personal details</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREEN.EDITS_USERS_ACCOUNT)}>
          <Text style={styles().editBtn}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Spacer height={hp(2)} />
      <UsersDetails />
      <Spacer height={hp(2)} />
      <View style={styles().tags}>
        {tags.map((e, i) => (
          <TouchableOpacity
            style={styles().user}
            key={i}
            onPress={() => handleTagPress(i)}>
            <FavoriteIcon />
            <Text style={styles().tagsTitle}>{e}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Spacer height={hp(1)} />
      {list.map((i, index) => (
        <TouchableOpacity
          style={styles().rows}
          key={index}
          onPress={() =>
            navigation.navigate('Bottom_tab', {screen: SCREEN.ORDERS})
          }>
          <Text style={styles().name} key={index}>{i}</Text>
          <BlackArrowRight />
        </TouchableOpacity>
      ))}
      <Spacer height={hp(2)} />
      <View>
        <Text style={styles().text}>Send Feedback</Text>
        <Spacer />
        <Text style={styles().text}>Report an Emergency</Text>
        <Spacer />
        <Text style={styles().text}>Rate us on the Play Store</Text>
        <Spacer />
        <Spacer />
      </View>
      <Spacer height={hp(2)} />
      <CommonButtons
        title="Log out"
        bgcolor={COLORS.primary}
        onPress={handleLogoutFn}
      />
      <Spacer height={hp(14)} />
    </ScrollView>
  );
};

export default Account;
