import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground
} from 'react-native';
import {styles} from '../styles/screenStyles/ReceipeDetails';
import Tab from './Tab';
import Icon from 'react-native-vector-icons/FontAwesome';
function ReceipeDetails({navigation, route}: any) {
  const {item, setSearchString
  } = route.params;
  const [id, setId] = useState<number>(item?.idMeal);
  const [mealDetails, setMealDetails] = useState<any>();
  const [selectedTab, setSelectedTab] = useState<string>('Ingrediants');

  const getMealsDetailsById = async () => {
    if (item?.idMeal) {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        if (!response?.ok) {
          throw new Error('Network response was not ok');
        }
        const apiData = await response.json();
        setMealDetails(apiData);
        // console.log(apiData, 'api datat')
      } catch (error) {
        console.log('erro fetching');
      }
    }
  };
  const TotalIngredients: any = [];
  const RecipeIngredients = (ingredients: any) => {
    const IngrediantsMeasures: any = [];
    for (let i = 1; i <= 20; i++) {
      const key = `strIngredient${i}`;
      const Ingredients = ingredients[key];
      const keyMeasure = `strMeasure${i}`;
      const Measures = ingredients[keyMeasure];

      if (Ingredients && Measures) {
        IngrediantsMeasures.push(
          <Text
            style={styles.ingredientList}
            key={i}>{`${Ingredients}  -  ${Measures}`}</Text>,
        );
      }
    }
    TotalIngredients.push(IngrediantsMeasures?.length);
    return IngrediantsMeasures;
  };

  useEffect(() => {
    getMealsDetailsById();
    setSearchString('');
  }, []);

  return (
    <View style={styles.detailsBox}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {mealDetails?.meals?.map((item: any) => (
          <View>
            <ImageBackground
              source={{uri: item.strMealThumb}}
              style={styles.detailsScreenImage}></ImageBackground>

            <View style={styles.detailsPage}>
              <View>
                <Text style={styles.items}>{item?.strMeal}</Text>
                <View style={styles.receipeMenu}>
                  <View style={styles.subMenu}>
                    <Text style={styles.menuTitle}>Ingredients</Text>
                    <Text style={styles.menuText}>{TotalIngredients}</Text>
                  </View>
                  <View style={styles.subMenu}>
                    <Text style={styles.menuTitle}>Speciality</Text>
                    <Text style={styles.menuText}>{item?.strArea}</Text>
                    <Icon name='search' size={40} color ='red' />
                  </View>
                  <View style={styles.subMenu}>
                    <Text style={styles.menuTitle}>
                      {item?.strTags ? 'Tags' : 'Category'}
                    </Text>
                    <Text style={styles.menuText}>
                      {item?.strTags ? item?.strTags : item?.strCategory}
                    </Text>
                  </View>
                </View>
                <View
                  style={styles.tabContainer}>
                  <Tab
                    setSelectedTab={setSelectedTab}
                    selectedTab={selectedTab}
                  />
                </View>
              </View>
              <View>
                {selectedTab === 'Ingrediants' ? (
                  <View>
                    <View>
                      {RecipeIngredients(item)}
                    </View>
                  </View>
                ) : (
                  <View
                    style={styles.instructionContainer}>
                    <Text style={styles.instructionText}>
                      {item?.strInstructions}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
export default ReceipeDetails;
