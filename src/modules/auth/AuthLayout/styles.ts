import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#E5E4E2',
      height: hp(100),
    },
    logoContainer: {
      backgroundColor: COLORS.white,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      elevation: 1,
      shadowColor: 'gray',
    },
    tabs: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
      color: COLORS.black,
      width: wp(30),
      paddingBottom: 4,
      textAlign: 'center',
    },
    activeText: {
      borderBottomWidth: 2,
      borderBottomColor: COLORS.primary,
      paddingBottom: hp(1),
    },
    children: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
