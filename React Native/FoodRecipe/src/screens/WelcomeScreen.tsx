import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

import { styles } from '../styles/screenStyles/WelcomeScreen';

export default function WelcomeScreen(props: any) {
  console.log(props?.navigation?.navigate);

  const handlePress = () => {
    props?.navigation?.navigate('Home');
  };

  return (
    <View>
      <ImageBackground
        fadeDuration={2000}
        blurRadius={1}
        source={require('../assests/images/indian_wallpaper.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text} numberOfLines={1}>
            Let's Start
          </Text>
          <TouchableHighlight
            style={styles.welcomeButton}
            onPress={handlePress}>
            <Text style={styles.buttonText}>Yummy Receipes</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}
