import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      padding: wp(1.5),
    },
    page: {
      flexDirection: 'row',
      alignItems: 'center',
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
    title2: {
      fontSize: 25,
      fontWeight: '900',
      color: COLORS.black,
    },
  });
