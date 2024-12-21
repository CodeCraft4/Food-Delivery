import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.primary,
    },
    insideContainer: {
      marginTop: hp(4),
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: COLORS.white,
      padding:wp(3),
    },
    title: {
      fontSize: 23,
      fontWeight: '700',
      color: COLORS.black,
      marginTop: hp(4),
    },
    item: {
      flexDirection: 'row',
      marginBottom: wp(2),
      cursor: 'pointer',
    },
    itemText: {
      fontSize: 15,
      fontWeight: '600',
    },
    dinner: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: wp(5),
    },
    dinnerFood: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    dinnerTitle: {
      fontSize: 13,
      fontWeight: '500',
      color: COLORS.black,
    },
  });
