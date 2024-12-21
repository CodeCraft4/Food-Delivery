import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      width: wp(90),
      backgroundColor: '#FDF9EA',
      height: hp(50),
      borderTopRightRadius: 13,
      borderTopLeftRadius: 13,
      borderBottomLeftRadius: 13,
      textAlign: 'center',
      margin: 'auto',
      padding: wp(4),
      zIndex: -2,
    },
    title: {
      color: COLORS.primary,
      fontWeight: '400',
      fontSize: 20,
    },
    breakfast: {
      fontWeight: '900',
    },
    scrollView: {
      width: wp(100),
    },
    card: {
      height: hp(40),
      borderRadius:30,
      backgroundColor: COLORS.white,
      margin: wp(2),
      zIndex: 99,
    },
    Foodtitle: {
      fontSize: 18,
      fontWeight: '600',
      color: COLORS.black,
    },
    price: {
      fontSize: 20,
      fontWeight: '400',
      color: COLORS.primary,
      paddingLeft: wp(5),
    },
    delivery: {
      padding: 2,
      backgroundColor: COLORS.white,
      borderRadius: 30,
      width: wp(30),
      textAlign: 'center',
      color: COLORS.black,
      marginLeft: wp(3),
      marginTop: -10,
      elevation: 6,
    },
    disscount: {
      position: 'absolute',
      top: 10,
    },
    disscountTitle: {
      position: 'absolute',
      top: 2,
      fontSize: 16,
      fontWeight: '800',
      paddingLeft: wp(2),
      color: COLORS.white,
    },
  });
