import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colorSet from '../../themes/colors';
import { fontSet, FontFamily } from '../../themes/fonts';

// shadowColor: 'yellow',
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     backgroundColor: 'white',
//     borderRadius: 10,

export const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container flex
      // backgroundColor: '#FAF0E6',
      backgroundColor: colorSet.frost, // Example background color
      padding: 13,
    },
    receipesList: {
      backgroundColor: colorSet.frost
    },
    headerSection: {
      flexDirection: 'row', // Arrange child components in a row
      justifyContent: 'space-between', // Space evenly along the main axis (horizontally)
      alignItems: 'center', // Align items along the cross axis (vertically)
      padding: 16, // Example padding
      // borderBottomWidth: 1, // Example border
    },
    searchBox: {
      backgroundColor: colorSet.white,
      borderRadius: 19,
      padding: 5,
      margin: 5,
      flexDirection: 'row', // Arrange child components in a row
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 6,
      shadowColor: colorSet.yellow,
      shadowOffset: { width: 6, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 8
    },
    ring: {
      backgroundColor: colorSet.white,
      borderRadius: 50,
      width: wp(10),
      height: hp(6),
      padding: 10,
    },
    // greeting: {
    //   fontSize: hp(2.3),
    //   fontFamily: FontFamily.robotoB
    // },
    greetingName: {
      fontSize: fontSet.t4,
      fontWeight: 'bold',
      letterSpacing: 2,
      color: colorSet.black,
      fontFamily: FontFamily.robotoB
    },
    inputField: {
      fontSize: fontSet.t2,
      fontWeight: 'bold',
      flex: 1,
      marginBottom: 1,
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
     shadowColor: colorSet.black,
     shadowOffset: {width: 0, height: 4},
     shadowOpacity: 0.1,
     shadowRadius: 7,
     marginVertical: 16,
     fontSize: fontSet.t4,
     elevation: 6,

     shadowColor: colorSet.yellow,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    // backgroundColor: 'white',
    // borderRadius: 10,
    },
    categoryText: {
     fontSize: fontSet.t3,
     fontWeight: 'bold',
     marginTop: 11,
     color: colorSet.black
    },
    categoryList: {
     fontSize: fontSet.decimal2,
     fontWeight: 'bold'
    },
    receipeBox: {
      flex: 1
    },
    imageStyle: {
      height: hp(10),
      width: wp(12)
    },
    receipeList: {
      // backgroundColor: colorSet.lightColor,
      // shadowColor: colorSet.black,

    shadowColor: colorSet.yellow,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 8,

      // shadowOffset: {width: 3, height: 4},
      // shadowOpacity: 0.1,
      // shadowRadius: 17,

      marginVertical: 16,
      alignItems: 'flex-start',
      // paddingVertical: 26,
      // paddingHorizontal: 8,
      // elevation: 8,
      // borderRadius: 30
    },
    receipeImage: {
      height: hp(35),
      width: wp(45),
      marginBottom: 5,
      borderRadius: 16,

      shadowColor: colorSet.yellow,
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
      fontSize: fontSet.decimal2,
      color: colorSet.black,
      fontWeight: 'bold'
    }
  });