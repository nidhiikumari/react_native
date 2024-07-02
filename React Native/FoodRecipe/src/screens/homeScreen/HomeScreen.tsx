import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, ScrollView, TextInput, ImageBackground} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
// @ts-ignore
import {debounce} from 'lodash';
import Category from './category/category';
import ReceipeList from './receipeList';
import {styles} from '../../styles/screenStyles/Home';
import {CommmonStyle} from '../../styles/globalStyles';

import colorSet from '../../themes/colors';

function HomeScreen() {
  const [mealCategory, setMealCategory] = useState<any>(null);
  const [categoryWiseList, setCategoryWiseList] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchString, setSearchString] = useState<string>('');

  const debounce = (func: Function, delay: number) => {
    let timeoutId: any;
    return function (this: any) {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  // const debouncedSearch = debounce((term: any) => {
  //   if (term) {
  //     try {
  //       const response: any = fetch(
  //         `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchString}`,
  //       );
  //       if (!response?.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const apiData = response.json();
  //       setCategoryWiseList(apiData);
  //       console.log(apiData, 'appi');
  //     } catch (error) {
  //       console.log('Error fetching data:', error);
  //     }
  //   }
  // }, 500);

  // useEffect(() => {
    // debouncedSearch(searchString);
  // }, [searchString]);

  const getCategoryWiseMeals = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`,
      );
      if (!response?.ok) {
        throw new Error('Network response was not ok');
      }
      const apiData = await response.json();
      setCategoryWiseList(apiData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const getMealsBySearch = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`,
      );
      if (!response?.ok) {
        throw new Error('Network response was not ok');
      }
      const apiData = await response.json();
      setCategoryWiseList(apiData);
      setSelectedCategory(apiData?.meals[0].strCategory);
      console.log('breakkkkkkkkkkkkkkkkkkk');
      console.log(apiData, 'appi');
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // www.themealdb.com/api/json/v1/1/search.php?s=carrot cake

  // www.themealdb.com/api/json/v1/1/filter.php?i=sweets
  console.log(selectedCategory, 'selectedCategory');

  const changeTextHandler = useCallback(debounce(getMealsBySearch, 5000), []);

  const changeHandler = (value: any) => {
    setSearchString(value);
    // if (value !== '') {
    changeTextHandler();
    // }
    // getMealsBySearch();
  };
  //  #ffef00  #fff000 #ffc40c #f4ca16
  console.log(searchString, 'search');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const apiData = await response.json();
        setMealCategory(apiData);
        setSelectedCategory(apiData?.meals[0].strCategory);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the API when the component mounts
  }, []);

  useEffect(() => {
    if (searchString === '') {
      console.log('category changes');
      getCategoryWiseMeals();
    }
  }, [selectedCategory]);

  console.log(searchString === '', 'selectedCategory')

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        <ImageBackground
          fadeDuration={2000}
          source={require('../../assests/images/receipe_wallpaper.jpg')}
          resizeMode="cover"
          style={styles.imageStyle}>
          <View style={{paddingHorizontal: 2}}>
            <Text style={styles.greetingName}>Just</Text>
            <Text style={styles.greetingName}>Taste One</Text>
            <Text style={styles.greetingName}>Peace........</Text>
          </View>
        </ImageBackground>
        <View style={styles.container}>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search"
              value={searchString}
              placeholderTextColor={colorSet.lightGray}
              style={styles.inputField}
              onChangeText={changeHandler}
            />
            <View style={styles.ring}>
              <MagnifyingGlassIcon color={'gray'} />
            </View>
          </View>
          <View>
            <Category
              mealCategory={mealCategory}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </View>
          <View style={styles.receipeBox}>
            <Text style={styles.categoryText}>{selectedCategory}</Text>
            <ReceipeList categoryWiseList={categoryWiseList} setSearchString={setSearchString} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}
export default HomeScreen;
