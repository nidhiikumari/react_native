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
        blurRadius={2}
        source={require('../assests/images/spicy.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text} numberOfLines={1}>
            Welcome to
          </Text>
          <Text style={styles.title}>Receipes</Text>
          <TouchableHighlight
            style={styles.welcomeButton}
            onPress={handlePress}>
            <Text style={styles.buttonText}>Start Cooking</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}
