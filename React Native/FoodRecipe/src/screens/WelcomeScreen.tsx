import {
  View, Text, StyleSheet, StatusBar, ImageBackground, Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { useNavigation } from '@react-navigation/native';
// import CoverImage from '../assests/images/nutrisious.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: hp(5),
    color: 'red',
    letterSpacing: 3,
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    margin: 3
  },
  title: {
    fontSize: hp(9),
    color: 'red',
    letterSpacing: 6,
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    margin: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    textShadowOffset: { width: 0, height: 4 }, // Shadow offset (x, y)
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
    fontFamily: 'Lato-Bold'
  },
  image: {
    width: wp('100%'), // applied to Image
    height: hp('100%')
  },
  welcomeButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 6,
    marginTop: 38,
    cursor: 'pointer'
  },
  buttonText: {
    color: 'white', // Text color of the button
    fontSize: hp(5),
    fontWeight: 'bold',
    letterSpacing: 4,
    fontFamily: 'RobotoSlab-Bold'
  },
});

export default function WelcomeScreen(props: any) {
  // const navigation = useNavigation();
  console.log(props?.navigation?.navigate)

  const handlePress = () => {
    console.log('hello');
    props?.navigation?.navigate('Home')
    // navigation.navigate({screen: 'Home'}) // Navigate to 'Other' screen
  };

  return (
    <View>
      {/* <StatusBar
        barStyle='light-content'
      /> */}
      {/* <Button ></Button> */}
      <ImageBackground fadeDuration={2000} blurRadius={2} source={require('../assests/images/spicy.jpg')} resizeMode='cover' style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text} numberOfLines={1}>
            Welcome to
          </Text>
          <Text style={styles.title}>Receipes</Text>
          {/* <TouchableOpacity style={styles.welcomeButton} onPress={handlePress}>
            <Text style={styles.buttonText}>Start Cooking</Text>
          </TouchableOpacity> */}
          <TouchableHighlight style={styles.welcomeButton} onPress={handlePress}>
          <Text style={styles.buttonText}>Start Cooking</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View >
  )
}