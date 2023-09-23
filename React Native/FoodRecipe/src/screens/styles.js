import { StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container flex
      backgroundColor: 'white', // Example background color
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
      backgroundColor: '#DCDCDC',
      borderRadius: 15,
      padding: 5,
      flexDirection: 'row', // Arrange child components in a row
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    ring: {
      backgroundColor: 'white',
      borderRadius: 50,
      width: wp(10),
      height: hp(6),
      padding: 10
    },
    punchline: {
      // marginBottom: 2,
      //  margin
      // margin
    },
    greeting: {
      fontSize: hp(2.3),
      // letterSpacing: 3,
      // color: 'black',
      // color: 'text-neutral-600',
      fontFamily: 'RobotoSlab-Bold'
    },
    greetingName: {
      fontSize: hp(4),
      fontWeight: 'bold',
      letterSpacing: 2,
      color: 'black',
      fontFamily: 'RobotoSlab-Bold',
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
      width: wp(100)
    }
    // Other styles for your content
  });