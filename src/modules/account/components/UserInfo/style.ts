import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      padding: wp(3),
      borderRadius: 10,
      width: wp(90),
      margin: 'auto',
    },
    title: {
      fontSize: 18,
      fontWeight: '400',
      color: COLORS.black,
    },
    input: {
      borderBottomWidth: 0.7,
      padding: wp(1),
    },
    user: {
      flexDirection: 'row',
    },
    address: {
      width: wp(45),
    },
  });
