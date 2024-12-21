import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    modulesContainer: {
      height: hp(100),
      width: wp(100),
    },
    container: {
      backgroundColor: COLORS.primary,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      backgroundColor: COLORS.white,
      borderRadius: 100,
      height: wp(25),
      width: wp(25),
      justifyContent: 'center',
      alignItems: 'center',
    },
    skip: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
      position: 'absolute',
      top: 10,
      right: 10,
    },
    skipText: {
      color: COLORS.white,
      fontWeight: '500',
      fontSize: 15,
    },
    user: {
      fontSize: wp(15),
      color: COLORS.white,
      fontWeight: '200',
    },
    userName: {
      fontWeight: '400',
      color: COLORS.white,
      fontSize: wp(15),
    },
    description: {
      width: wp(65),
      fontSize: wp(5),
      fontWeight: '300',
      color: COLORS.white,
      textAlign: 'center',
    },
    location: {
      fontSize: 18,
      fontWeight: '600',
      color: COLORS.white,
    },
  });
