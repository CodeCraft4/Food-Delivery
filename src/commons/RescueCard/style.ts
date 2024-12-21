import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    user: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: COLORS.secondary,
    },
    edits: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0.6,
      padding: wp(1),
      borderColor: COLORS.black,
      borderRadius: 30,
      paddingLeft: wp(5),
    },
    description: {
      fontSize: 16,
      fontWeight: '300',
      width: wp(80),
    },
    card: {
      height: hp(40),
      borderRadius: 10,
      backgroundColor: COLORS.white,
      margin: wp(2),
      zIndex: 99,
      borderWidth: 0.4,
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
      position:'absolute',
      top:135,
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
    text: {
      padding: wp(3),
    },
    faverite: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
