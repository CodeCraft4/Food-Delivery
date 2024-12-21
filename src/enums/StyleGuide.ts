import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ACTIVE_OPACITY = 0.9;
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

enum COLORS {
  lightGray = '#F3F3F3',
  primary = 'rgba(248, 119, 74, 1)',
  white = '#FFFFFF',
  lightPrimary = '##FF855D',
  gray = '#B2B2B2',
  lightestGray= '#E5E4E2',
  secondary = '#4FA987',
  darkSecondary = '#079049',
  black = '#000',
}

// const commonStyles = StyleSheet.create({
//     horizontalView: {
//       alignItems: 'center',
//       flexDirection: 'row',
//     },
//     horizontalView_m05: {
//       alignItems: 'center',
//       flexDirection: 'row',
//       marginVertical: hp(0.5),
//     },
//     horizontalView_m1: {
//       alignItems: 'center',
//       flexDirection: 'row',
//       marginVertical: hp(1),
//     },
//     justifyView: {
//       alignItems: 'center',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//     },
//     justifyView_m05: {
//       alignItems: 'center',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginVertical: hp(0.5),
//     },
//     justifyView_m1: {
//       alignItems: 'center',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginVertical: hp(1),
//     },
//     justifyView_m2: {
//       alignItems: 'center',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginVertical: hp(2),
//     },
//     center: {
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     shadow_5: {
//       elevation: 5,
//       shadowColor: COLORS.black,
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//     },
//     shadow_3: {
//       elevation: 3,
//       shadowColor: COLORS.black,
//       shadowOffset: {
//         width: 0,
//         height: 1,
//       },
//       shadowOpacity: 0.22,
//       shadowRadius: 2.22,
//     },
//     shadow_10: {
//       elevation: 10,
//       shadowColor: COLORS.black,
//       shadowOffset: {
//         width: 0,
//         height: 5,
//       },
//       shadowOpacity: 0.34,
//       shadowRadius: 6.27,
//     },
//     shadow_20: {
//       elevation: 20,
//       shadowColor: COLORS.black,
//       shadowOffset: {
//         width: 0,
//         height: 10,
//       },
//       shadowOpacity: 0.51,
//       shadowRadius: 13.16,
//     },
//     noPadding: {
//       paddingTop: 0,
//       paddingLeft: 0,
//       paddingRight: 0,
//       paddingBottom: 0,
//       paddingStart: 0,
//       paddingEnd: 0,
//     },
//     noMargin: {
//       marginTop: 0,
//       marginLeft: 0,
//       marginRight: 0,
//       marginBottom: 0,
//       marginStart: 0,
//       marginEnd: 0,
//     },
//     bottomView: {
//       flex: 1,
//       backgroundColor: COLORS.primary,
//       borderTopRightRadius: hp(1.4),
//       borderTopLeftRadius: hp(1.4),
//       paddingHorizontal: '5%',
//       paddingTop: hp(2),
//       paddingBottom: isIOS() ? hp(3.3) : hp(2),
//     },
//   });

export {HEIGHT, WIDTH, wp, hp, ACTIVE_OPACITY, COLORS};
