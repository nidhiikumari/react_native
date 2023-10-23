import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {styles} from '../../../styles/screenStyles/Home';
import colorSet from '../../../themes/colors';

function Category({mealCategory, setSelectedCategory, selectedCategory}: any) {
  const Categories = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];

  return (
    <View>
      <Text style={styles.categoryText}>Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {mealCategory?.meals?.map((items: any, index: any) => (
          <Pressable
            onPress={() => setSelectedCategory(items?.strCategory)}
            key={items?.strCategory}
            style={[
              styles.categoryBox,
              {
                backgroundColor:
                selectedCategory === items?.strCategory ? colorSet.yellow : colorSet.white,
              },
            ]}>
            <Text
              style={[
                styles.categoryList,
                {
                  color: selectedCategory === items?.strCategory ? colorSet.white : colorSet.black,
                },
              ]}>
              {items?.strCategory}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
export default Category;
