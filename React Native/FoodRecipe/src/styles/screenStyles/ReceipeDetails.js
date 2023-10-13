import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colors from '../../themes/colors';
import { fonts } from '../../themes/fonts';

export const styles = StyleSheet.create({
// details
detailsPage: {
  backgroundColor: colors.white,
  flex: 1,
  marginTop: 200,
  borderTopLeftRadius: 56,
  borderTopRightRadius: 56,
  alignItems: 'center',
  paddingHorizontal: 16,
},
detailsBox: {
  backgroundColor: colors.choco,
  flex: 1
},
contentView: {
  backgroundColor: colors.white,
  flex: 1,
  marginTop: 200,
  borderTopLeftRadius: 56,
  borderTopRightRadius: 56,
  alignItems: 'center',
  paddingHorizontal: 16,
},
contentBox: {
  height: 300,
  width: 300,
  position: 'absolute',
  top: -150,
},
detailsScreenImage: {
  width: '100%', 
  height: '100%',
  resizeMode: 'contain',
},
items : {
  marginTop: 140,
  fontSize: hp(fonts.t4),
  fontWeight: 'bold'
},
description: {
  fontSize: hp(fonts.t3),
  marginVertical: 16
}

});