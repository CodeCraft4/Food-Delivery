import {StyleSheet} from 'react-native';
import {COLORS, hp, wp} from '@enums';

export const styles = () =>
  StyleSheet.create({
    modalContainer: {
      backgroundColor: COLORS.lightestGray,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      elevation: 5,
      height: hp(100),
    },
    insideContainer: {
      width: wp(100),
      height: hp(55),
      marginTop: hp(-3),
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
      position: 'absolute',
      top: 5,
      zIndex: 1,
      marginLeft: wp(3),
      marginTop: hp(2),
      height: hp(5),
      paddingLeft: wp(5),
      paddingRight: wp(5),
      borderWidth: 0.3,
      borderRadius: 30,
      backgroundColor: COLORS.white,
    },
    deliverText: {
      fontSize: 18,
      fontWeight: '600',
      color: COLORS.black,
    },

    map: {
      width: wp(100),
      height: hp(60),
      overflow: 'hidden',
      position: 'relative',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    editsBtn: {
      justifyContent: 'flex-end',
      textAlign: 'right',
      alignItems: 'flex-end',
      right: wp(10),
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
    confirmLocation: {
      width: wp(85),
    },
  });
