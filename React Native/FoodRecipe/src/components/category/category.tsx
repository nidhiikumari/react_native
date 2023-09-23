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
import React, {useEffect, useState} from 'react';

const CategoryList = [
  'Popular',
  'Western',
  'Drinks',
  'Local',
  'Dessert',
  'Special',
];

function Category() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const Categories = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Categories?.map((items: any, index: any) => (
          <View
            style={{
              backgroundColor: index === 0 ?  'red' : 'pink',
              marginRight: 36,
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 10,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 0.1,
              shadowRadius: 7,
              marginVertical: 16
            }}>
            <Text
            style={{
             color: index === 0 ? 'white' : 'black',
             fontSize: 18,
            }}>{items}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
export default Category;
