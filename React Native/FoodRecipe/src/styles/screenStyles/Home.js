import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import colors from '../../themes/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container flex
      backgroundColor: colors.white, // Example background color
      padding: 13,
    },
    headerSection: {
      flexDirection: 'row', // Arrange child components in a row
      justifyContent: 'space-between', // Space evenly along the main axis (horizontally)
      alignItems: 'center', // Align items along the cross axis (vertically)
      padding: 16, // Example padding
      // borderBottomWidth: 1, // Example border
    },
    searchBox: {
      backgroundColor: colors.gray,
      borderRadius: 15,
      padding: 5,
      flexDirection: 'row', // Arrange child components in a row
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ring: {
      backgroundColor: colors.white,
      borderRadius: 50,
      width: wp(10),
      height: hp(6),
      padding: 10,
    },
    greeting: {
      fontSize: hp(2.3),
      fontFamily: 'RobotoSlab-Bold',
    },
    greetingName: {
      fontSize: hp(4),
      fontWeight: 'bold',
      letterSpacing: 2,
      color: colors.black,
      fontFamily: 'RobotoSlab-Bold'
    },
    inputField: {
      fontSize: hp(1.9),
      flex: 1,
      marginBottom: 1,
      paddingLeft: 6
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
     shadowColor: colors.black,
     shadowOffset: {width: 0, height: 4},
     shadowOpacity: 0.1,
     shadowRadius: 7,
     marginVertical: 16,
     fontSize: 18
    },
    receipeList: {
      backgroundColor: colors.pinkLight,
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 17,
      marginVertical: 16,
      alignItems: 'center',
      paddingVertical: 26,
      paddingHorizontal: 8,
    },
    receipeImage: {
      height: 150,
      width: 150,
      resizeMode: 'center'
    },
    itemsBox: {
      flexDirection: 'row'
    }
  });