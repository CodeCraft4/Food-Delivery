import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
    },
    img: {
      position: 'relative',
    },
    rating: {
      position: 'absolute',
      top: 25,
      right: 20,
      padding: hp(1),
      borderWidth: 0.4,
      borderColor: COLORS.white,
      borderRadius: 30,
      flexDirection: 'row',
      gap: wp(2),
      paddingLeft: wp(6),
    },
    back: {
      position: 'absolute',
      top: 35,
      left: 20,
      padding: hp(1),
      backgroundColor: COLORS.white,
      borderRadius: 50,
    },
    rate: {
      fontWeight: '800',
      fontSize: 16,
      color: COLORS.white,
    },
    name: {
      padding: hp(2),
      backgroundColor: COLORS.white,
      borderRadius: 20,
      elevation: 3,
      width: wp(30),
      marginLeft: wp(5),
      fontSize: 15,
      fontWeight: '700',
      color: COLORS.black,
      textAlign: 'center',
    },
    foodName: {
      position: 'absolute',
      bottom: -15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp(100),
      zIndex: 99,
    },
    heart: {
      padding: hp(2),
      backgroundColor: COLORS.white,
      borderRadius: 50,
      elevation: 3,
      fontSize: 15,
      width: 60,
      height: 60,
      fontWeight: '700',
      color: COLORS.black,
      marginRight: 16,
      textAlign: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: COLORS.primary,
    },
    insideContainer: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: COLORS.white,
      elevation: 5,
      marginTop: -15,
      height: hp(100),
    },
    info: {
      padding: wp(4),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    desc: {
      fontWeight: '700',
      fontSize: 25,
    },
    desc2: {
      width: wp(60),
      fontSize: wp(3),
    },
    nutrate: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    value: {
      fontWeight: '600',
      borderBottomColor: COLORS.gray,
      borderBottomWidth: 0.4,
    },
    vlaue1: {
      fontStyle: 'italic',
      color: COLORS.black,
      fontSize: 12,
    },
    vlaue2: {
      color: COLORS.black,
      fontWeight: '600',
    },
    total: {
      textAlign: 'center',
      fontStyle: 'italic',
    },
    totalValue: {
      fontSize: 10,
      color: COLORS.black,
    },
    totalCol: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: 0.4,
      alignItems: 'center',
    },
    price: {
      color: COLORS.primary,
      fontSize: 30,
      fontWeight: '900',
      padding: hp(2),
    },
  });
