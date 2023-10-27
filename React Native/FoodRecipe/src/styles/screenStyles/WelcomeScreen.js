import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colorSet from '../../themes/colors';
import { FontFamily, fontSet } from '../../themes/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: fontSet.t5,
      color:'white',
      letterSpacing: 3,
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      margin: 3,
      textShadowColor: '#f4ca16',
      textShadowRadius: 4
    },
    title: {
      fontSize: fontSet.t9,
      color: 'white',
      letterSpacing: 6,
      alignItems: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      margin: 3,
      textShadowColor: '#f4ca16', // Shadow color
      textShadowRadius: 4 // Shadow blur radius
    },
    textContainer: {
      position: 'absolute', // This makes sure the text is positioned above the image
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: FontFamily.latoB
    },
    image: {
      width: wp('100%'), // applied to Image
      height: hp('100%')
    },
    welcomeButton: {
      backgroundColor: '#f4ca16',
      padding: 15,
      borderRadius: 13,
      marginTop: 38,
      cursor: 'pointer'
    },
    buttonText: {
      color: colorSet.white, // Text color of the button
      fontSize: fontSet.t5,
      fontWeight: 'bold',
      letterSpacing: 4,
      fontFamily: FontFamily.robotoB
    }
  });