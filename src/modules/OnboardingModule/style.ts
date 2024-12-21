import {COLORS, wp, hp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.primary,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: hp(100),
    },
    logo: {
      backgroundColor: COLORS.white,
      borderRadius: 100,
      height: wp(20),
      width: wp(20),
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
      right: 20,
    },
    skipText:{
       color:COLORS.white,
       fontWeight:'500',
       fontSize:14,
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    title: {
      color: COLORS.white,
      fontSize: wp(10),
      width: wp(80),
      textAlign: 'center',
      fontWeight: '100',
    },
    stepperContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: hp(2),
    },
    dot: {
      height: hp(1),
      width: wp(2),
      borderRadius: 50,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: COLORS.white,
    },
    inactiveDot: {
      backgroundColor: COLORS.lightGray,
    },
    start: {
      width: wp(80),
    },
  });
