import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      position: 'relative',
    },
    absolute: {
      position: 'absolute',
      top: 0,
      flex: 1,
      padding: wp(2),
      flexDirection: 'row',
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: COLORS.white,
    },
    subTitle: {
      color: COLORS.white,
      fontStyle: 'italic',
    },
    desc: {
      width: wp(50),
      color: COLORS.white,
    },
    lunch: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    line: {
      justifyContent: 'center',
      textAlign: 'center',
      borderBottomColor: COLORS.lightestGray,
      borderBottomWidth: 4,
      width: wp(80),
      margin: 'auto',
      borderBottomEndRadius:20,
      borderBottomStartRadius:20,
    },
  });
