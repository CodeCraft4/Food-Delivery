import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    logo: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    logoTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: COLORS.black,
    },
    price: {
      color: COLORS.primary,
      fontSize: 18,
      fontWeight: '800',
    },
    card: {
      padding: wp(3),
      borderWidth: 0.6,
      margin: wp(2),
      borderRadius: 10,
      width: wp(70),
    },
    desc: {
      width: wp(50),
      padding: wp(2),
      marginLeft: wp(15),
      justifyContent: 'center',
      margin: 'auto',
    },
  });
