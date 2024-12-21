import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    page: {
      padding: wp(3),
      marginTop: hp(2),
      flex: 1,
    },
    pageTitle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    pageName: {
      color: COLORS.black,
      fontWeight: '400',
      fontSize: 20,
      letterSpacing: 1,
    },
    title: {
      fontSize: 22,
      fontWeight: '300',
      color: COLORS.black,
    },
    payout: {
      padding: wp(3),
      backgroundColor: COLORS.white,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    payName: {
      fontSize: 16,
      color: COLORS.black,
    },
  });
