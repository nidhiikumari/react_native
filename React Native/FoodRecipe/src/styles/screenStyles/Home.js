import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colorSet from '../../themes/colors';
import { fontSet, FontFamily } from '../../themes/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container flex
      paddingHorizontal: 13,
      backgroundColor: '#FFFFF'
    },
    headerSection: {
      flexDirection: 'row', // Arrange child components in a row
      justifyContent: 'space-between', // Space evenly along the main axis (horizontally)
      alignItems: 'center', // Align items along the cross axis (vertically)
      padding: 16, // Example padding
    },
    searchBox: {
      backgroundColor: colorSet.white,
      borderRadius: 19,
      padding: 5,
      top: -28,
      marginBottom: 0,
      flexDirection: 'row', // Arrange child components in a row
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 6,
      shadowColor: '#f4ca16',
    },
    ring: {
      backgroundColor: colorSet.white,
      borderRadius: 50,
      width: wp(10),
      height: hp(6),
      padding: 10,
    },
    greetingName: {
      fontSize: fontSet.t4,
      fontWeight: 'bold',
      letterSpacing: 2,
      color: 'white',
      fontFamily: FontFamily.robotoB
    },
    inputField: {
      fontSize: fontSet.t2,
      fontFamily: FontFamily.robotoB,
      flex: 1,
      paddingLeft: 6,
    },
    containerRoot: {
      marginTop: 12,
    },
    banner: {
      height: hp(15),
      width: wp(100),
    },
    categoryBox: {
     marginRight: 36,
     borderRadius: 8,
     paddingHorizontal: 16,
     paddingVertical: 10,
     shadowOpacity: 0.1,
     marginVertical: 16,
     fontSize: fontSet.t4,
     fontFamily: FontFamily.robotoB,
     elevation: 12,
    shadowColor: '#f4ca16',
    shadowOffset: { width: 15, height: 15 },
    shadowRadius: 8
    },
    categoryText: {
     fontSize: fontSet.t3,
     fontWeight: 'bold',
     fontFamily: FontFamily.robotoB,
     marginTop: 0,
     color: colorSet.black
    },
    categoryList: {
     fontSize: fontSet.decimal2,
     fontWeight: 'bold',
    fontFamily: FontFamily.robotoB,
    },
    receipeBox: {
      flex: 1,
      backgroundColor: '#FFFFF'
    },
    imageStyle: {
      height: hp(25),
      width: wp(100),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    receipeList: {
    shadowColor: '#FC6A03',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 6,
      marginVertical: 16,
      alignItems: 'flex-start'
    },
    receipeImage: {
      height: hp(35),
      width: wp(45),
      marginBottom: 5,
      borderRadius: 16,
      shadowColor:'#FC6A03',
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
    },
    itemsBox: {
      width: wp(42),
      marginHorizontal: 5
    },
    time: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    items: {
      marginTop: 7,
      fontSize: fontSet.t3,
      color: colorSet.black,
      fontWeight: 'bold',
      fontFamily: FontFamily.robotoB
    }
  });