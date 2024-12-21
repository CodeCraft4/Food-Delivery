import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      textAlign: 'center',
      padding: wp(1),
      height: hp(100),
      flex:1,
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
  });
