import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    perform: {
      position: 'relative',
      marginLeft: wp(1),
    },
    inerSide: {
      flexDirection: 'row',
      position: 'absolute',
      padding: wp(2),
    },
    title: {
      fontSize: 23,
      fontWeight: '800',
      color: COLORS.white,
    },
    user: {
      fontStyle: 'italic',
      color: COLORS.white,
    },
    descrip: {
      width: wp(60),
      color: COLORS.white,
    },
    btnText: {
      fontWeight: '800',
      color: COLORS.white,
      flexDirection: 'row',
      alignItems: 'center',
      cursor: 'pointer',
    },
    stepperContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: hp(2),
    },
    dot: {
      height: hp(0.4),
      width: wp(2),
      borderRadius: 50,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: COLORS.primary,
      height: hp(0.5),
      width: wp(8),
    },
    inactiveDot: {
      backgroundColor: COLORS.gray,
    },
  });
