import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      textAlign: 'center',
      padding: wp(1),
      height: hp(100),
      flex: 1,
    },
    page: {
      flexDirection: 'row',
    },
    list: {
      flexDirection: 'row',
    },
    title: {
      fontSize: 17,
      fontWeight: '600',
      color: COLORS.black,
    },
    descrip: {
      fontWeight: '300',
      width: wp(70),
      fontSize: 16,
      flexWrap: 'wrap',
    },
    prefer: {
      fontSize: 30,
      fontWeight: '600',
      color: COLORS.secondary,
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
      justifyContent: 'space-between',
    },
    back: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(2),
    },
    maximun: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: COLORS.lightestGray,
      padding: hp(2),
      borderRadius: 20,
    },
    set: {
      fontSize: 18,
      fontWeight: '800',
      color: COLORS.black,
    },
    userName: {
      fontWeight: '600',
      color: COLORS.black,
      flexDirection: 'row',
      gap: wp(3),
      padding: hp(1),
      alignItems: 'center',
    },
  });
