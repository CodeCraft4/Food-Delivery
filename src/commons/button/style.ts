import {COLORS, hp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = ({bgcolor}) =>
  StyleSheet.create({
    button: {
      borderRadius: 30,
      backgroundColor: bgcolor ? bgcolor : COLORS.white,
      height: hp(6),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    buttonText: {
      color: bgcolor ? COLORS.white : COLORS.primary,
      fontSize: 17,
      fontWeight: '600',
      textAlign: 'center',
    },
  });
