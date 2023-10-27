import { StyleSheet } from 'react-native';
import colorSet from '../../themes/colors';
import { fontSet, FontFamily } from '../../themes/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
detailsPage: {
  backgroundColor: colorSet.white,
  top: -130,
  borderTopLeftRadius: 56,
  borderTopRightRadius: 56
},
detailsBox: {
  backgroundColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, #FBFAFA 26.04%)',
  flex: 1
},
contentView: {
  backgroundColor: colorSet.white,
  flex: 1,
  marginTop: 200,
  borderTopLeftRadius: 56,
  borderTopRightRadius: 56,
  alignItems: 'center',
  paddingHorizontal: 16,
},
detailsScreenImage: {
  height: hp(40),
  width: wp(100),
  resizeMode: 'contain'
},
items : {
  marginTop: 40,
  fontSize: fontSet.t4,
  alignItems: 'center',
  textAlign: 'center',
  fontWeight: 'bold',
  color: colorSet.black,
  textTransform: 'capitalize',
  marginBottom: 10,

  textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
  textShadowRadius: 1
},
receipeMenu: {
 display: 'flex',
 flexDirection: 'row',
 justifyContent: 'space-around',
 marginTop: 10
},
subMenu: {
  backgroundColor: '#f4ca16',
  padding: 15,
  borderRadius: 9,
  elevation: 9,
  fontFamily: FontFamily.robotoB
},
menuTitle: {
  fontSize: fontSet.decimal2,
  fontWeight: 'bold',
  fontFamily: FontFamily.robotoB,
  color: colorSet.black
},
menuText: {
  fontFamily: FontFamily.robotoB,
  color: colorSet.black,
  textAlign: 'center'
},
tabContainer: {
  marginVertical: 1,
  height: 100
},
instructionContainer: {
  paddingHorizontal: 15,
  paddingVertical: 15,
  backgroundColor: '#F7F7FF',
  borderRadius: 7
},
instructionText: {
  fontSize: 17,
  color: 'black',
  fontFamily: FontFamily.robotoB,
  letterSpacing: 1
},
pressableTab: {
  padding: 34,
  alignItems: 'center',
},
tabText: {
  fontWeight: 'bold',
  fontSize: 20,
  fontFamily: FontFamily.robotoB
},
lineIndicator: {
  height: 1,
  backgroundColor: '#f4ca16',
  width: 100,
  borderWidth: 0.5,
  margin: 3,
  color: '#f4ca16'
},
ingredientList: {
  color: 'black',
  fontSize: 20,
  marginVertical: 7,
  backgroundColor: '#F7F7FF',
  padding: 10,
  paddingLeft: 27,
  fontFamily: FontFamily.robotoB,
}
});
