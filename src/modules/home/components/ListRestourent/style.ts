import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    tabs: {
      padding: wp(3),
      margin: wp(1),
      borderRadius: 10,
      fontWeight:'500'
    },
    buttons: {
      flexDirection: 'row',
    },
    activetabs: {
      borderWidth: 0.4,
      backgroundColor: COLORS.secondary,
      color: COLORS.white,
    },
    restourent: {
      margin: 'auto',
      justifyContent: 'center',
      width: wp(90),
      padding: wp(3),
    },
    logo: {
      flexDirection: 'row',
    },
    title: {
      color: COLORS.black,
      fontSize: 18,
      fontWeight: '600',
    },
    desc: {
      width: wp(70),
    },
    disscount: {
      fontSize: 16,
      color: COLORS.primary,
      fontWeight: '500',
      alignItems: 'center',
    },
    active: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(2),
    },
    delivery: {
      padding: wp(1),
      fontWeight: '600',
      color: COLORS.black,
      borderWidth: 0.3,
      borderRadius: 30,
      width: wp(35),
      textAlign: 'center',
    },
    arrowBtn: {
      padding: wp(3),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.6,
      width: wp(80),
      margin: 'auto',
      borderRadius: 10,
      borderColor: COLORS.gray,
    },
    viewTitle: {
      fontWeight: '800',
      fontSize: 16,
    },
  });
