import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import { styles } from '../../../styles/screenStyles/Home';

function Category() {

  const Categories = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Categories?.map((items: any, index: any) => (
          <View
            style={[styles.categoryBox, {
              backgroundColor: index === 0 ?  'red' : 'pink',
            }]}>
            <Text
            style={{
             color: index === 0 ? 'white' : 'black'
            }}>{items}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
export default Category;
