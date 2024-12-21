import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      textAlign: 'center',
      padding: wp(1),
      height: hp(100),
      flex: 1,
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
    title2: {
      fontSize: 17,
      fontWeight: '600',
      color: COLORS.white,
    },
    descrip: {
      fontWeight: '300',
      width: wp(70),
      fontSize: 16,
      flexWrap: 'wrap',
    },
    descrip2: {
      fontWeight: '300',
      width: wp(60),
      fontSize: 16,
      flexWrap: 'wrap',
      color: COLORS.white,
    },
    setUser: {
      fontWeight: '800',
      color: COLORS.black,
      fontSize: 20,
    },
    perform: {
      position: 'relative',
      marginLeft: wp(1),
    },
    name: {
      fontWeight: '700',
      fontSize: 16,
      color: COLORS.black,
      flexDirection: 'row',
      gap: wp(3),
      alignItems:'center'
    },
    userName: {
      fontWeight: '500',
      color: COLORS.secondary,
    },
    inerSide: {
      flexDirection: 'row',
      position: 'absolute',
      padding: wp(2),
    },
    Manage: {
      fontStyle: 'italic',
      color: COLORS.white,
    },
    btnText: {
      fontWeight: '800',
      color: COLORS.white,
      flexDirection: 'row',
      alignItems: 'center',
      cursor: 'pointer',
    },
    prefer: {
      fontSize: 30,
      fontWeight: '600',
      color: COLORS.secondary,
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
    },
    maximun: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: COLORS.lightestGray,
      padding: hp(1),
      borderRadius: 20,
    },
    set: {
      fontSize: 18,
      fontWeight: '300',
    },
    counter: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(4),
      borderWidth: 0.5,
      borderColor: COLORS.secondary,
      borderRadius: 30,
      padding: hp(1),
      paddingLeft: wp(5),
    },
    text: {
      fontSize: 16,
      fontWeight: '900',
      color: COLORS.secondary,
    },
    userManage: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: hp(1),
      backgroundColor: COLORS.lightestGray,
      marginBottom: hp(1),
      alignItems: 'center',
      borderRadius: 20,
    },
  });
