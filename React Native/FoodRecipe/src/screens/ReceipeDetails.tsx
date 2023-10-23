import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {styles} from '../styles/screenStyles/ReceipeDetails';
import Tab from './Tab';

function ReceipeDetails({navigation, route}: any) {
  const {item} = route.params;
  const [id, setId] = useState<number>(item?.idMeal);
  const [mealDetails, setMealDetails] = useState<any>();
  const [selectedTab, setSelectedTab] = useState<string>('Ingrediants');
  console.log(item?.idMeal, 'itemmm');

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
      } catch (error) {
        console.log('erro fetching');
      }
    }
  };

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
            style={{color: 'black', fontSize: 20, marginVertical: 7}}
            key={i}>{`${Ingredients}  -  ${Measures}`}</Text>,
        );
      }
    }
    return IngrediantsMeasures;
  };

  useEffect(() => {
    getMealsDetailsById();
  }, []);

  return (
    <View style={styles.detailsBox}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {mealDetails?.meals?.map((item: any) => (
          <View>
            <Image
              source={{uri: item.strMealThumb}}
              style={styles.detailsScreenImage}
            />
            <View style={styles.detailsPage}>
              <View>
                <Text style={styles.items}>{item?.strMeal}</Text>
                <View
                  style={{
                    marginVertical: 1,
                    height: 100,
                  }}>
                  <Tab setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
                </View>
              </View>
              <View>
                {selectedTab === 'Ingrediants' ? (
                  <View>
                    <View
                      style={{
                        alignItems: 'flex-start'
                      }}>
                      {RecipeIngredients(item)}
                    </View>
                  </View>
                ) : (
                  <View style={{paddingHorizontal: 15, paddingVertical: 15}}>
                    <Text style={{ fontSize: 17, color: 'black' }}>{item?.strInstructions}</Text>
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
