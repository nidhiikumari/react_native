import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
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

  useEffect(() => {
    // debouncedSearch(searchString);
  }, [searchString]);

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

  // const getMealsBySearch = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchString}`,
  //     );
  //     if (!response?.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const apiData = await response.json();
  //     setCategoryWiseList(apiData);
  //     console.log(apiData, 'appi')
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //   }
  // };

  // www.themealdb.com/api/json/v1/1/filter.php?i=sweets
  console.log(selectedCategory, 'selectedCategory');

  const changeHandler = (value: any) => {
    setSearchString(value);
    // getMealsBySearch();
  };

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
    getCategoryWiseMeals();
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        <View style={styles.headerSection}>
          <View>
            <Text style={CommmonStyle.greetingText}>Good Morning</Text>
            <Text style={styles.greetingName}>Nidhi Kumari!</Text>
          </View>
          <Image
            source={require('../../assests/images/women.jpg')}
            style={styles.imageStyle}
          />
        </View>
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

        <View style={styles.containerRoot}>
          <Image
            source={require('../../assests/images/breakfast.jpg')}
            style={styles.banner}
          />
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
          <ReceipeList categoryWiseList={categoryWiseList} />
        </View>
      </ScrollView>
    </View>
  );
}
export default HomeScreen;
