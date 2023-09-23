import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { BellIcon } from 'react-native-heroicons';
// import { BellIcon } from 'react-native-heroicons';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';

import Category from '../components/category/category';
import ReceipeList from '../components/receipeList';

function HomeScreen() {
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
      alignItems: 'center',
    },
    ring: {
      backgroundColor: 'white',
      borderRadius: 50,
      width: wp(10),
      height: hp(6),
      padding: 10,
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
      fontFamily: 'RobotoSlab-Bold',
    },
    greetingName: {
      fontSize: hp(4),
      fontWeight: 'bold',
      letterSpacing: 2,
      color: 'black',

      // color: 'text-neutral-600',
      fontFamily: 'RobotoSlab-Bold',
    },
    inputField: {
      fontSize: hp(1.9),
      flex: 1,
      marginBottom: 1,
      paddingLeft: 6,
      // texr
    },
    containerRoot: {
      marginTop: 12,
    },
    banner: {
      height: hp(15),
      width: wp(100),
      // resizeMode: 'cover'
    },
    // Other styles for your content
  });

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        // style={{backgroundColor: 'red'}}
      >
        <View style={styles.headerSection}>
          {/* <BellIcon color='gray' size={hp(5)} /> */}
          <View style={styles.punchline}>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.greetingName}>Nidhi Kumari!</Text>
          </View>
          <Image
            source={require('../assests/images/women.jpg')}
            style={{height: hp(10), width: wp(12)}}
          />
        </View>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search any receipe"
            placeholderTextColor={'#696969'}
            style={styles.inputField}
          />
          <View style={styles.ring}>
            <MagnifyingGlassIcon color={'gray'} />
          </View>
        </View>

        <View style={styles.containerRoot}>
          <Image
            source={require('../assests/images/breakfast.jpg')}
            style={styles.banner}
          />
        </View>
        <View>
          <Text>Category</Text>
          <Category />
        </View>
        <View style={{marginTop: 22, flex: 1}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Receipe List</Text>
          <ReceipeList />
        </View>
      </ScrollView>
    </View>
  );
}
export default HomeScreen;
