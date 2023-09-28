import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import Category from './category/category';
import ReceipeList from './receipeList';
import { styles } from '../../styles/screenStyles/Home';

function HomeScreen() {

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
      >
        <View style={styles.headerSection}>
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.greetingName}>Nidhi Kumari!</Text>
          </View>
          <Image
            source={require('../../assests/images/women.jpg')}
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
            source={require('../../assests/images/breakfast.jpg')}
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
