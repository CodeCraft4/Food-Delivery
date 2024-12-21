import {StyleSheet} from 'react-native';
import {COLORS, hp, wp} from '@enums';

export const styles = () =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: COLORS.lightestGray,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      alignItems: 'center',
      elevation: 5,
      height: hp(100),
    },
    insideContainer: {
      width: wp(100),
      height: hp(55),
      backgroundColor: COLORS.white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      paddingLeft: wp(7),
    },
    deliver: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    deliverText: {
      fontSize: 18,
      fontWeight: '600',
      color: COLORS.black,
    },
    search: {
      width: wp(100),
      height: hp(8),
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
    edits: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    address: {
      flexDirection: 'row',
    },
    addressTitle: {
      fontSize: 18,
      fontWeight: '600',
    },
    btnContainer: {
      flexDirection: 'row',
    },
    button: {
      elevation: 6,
      backgroundColor: 'white',
      shadowColor: 'gray',
      borderRadius: 25,
      width: wp(25),
      height: hp(10),
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    text: {
      fontSize: 16,
      fontWeight: '600',
      color: COLORS.black,
    },
  });
