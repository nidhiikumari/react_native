import {View, Text, Image, FlatList, Pressable, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../styles/screenStyles/Home';
import ContentLoader, {Rect} from 'react-content-loader/native';

function ReceipeList({categoryWiseList, setSearchString}: any) {
  const navigation = useNavigation();
  const {height, width} = Dimensions.get('screen');

  return (
    <View>
      {categoryWiseList?.meals ? (
        <FlatList
          data={categoryWiseList?.meals}
          renderItem={({item}: any) => (
            <Pressable
              onPress={() =>
                navigation.navigate('ReceipeDetail', {
                  item: item,
                  setSearchString: setSearchString,
                })
              }
              key={item?.idMeal}
              style={styles.receipeList}>
              <View>
                <Image
                  source={{uri: item.strMealThumb}}
                  style={styles.receipeImage}
                />
                <View style={styles.itemsBox}>
                  <Text
                    style={styles.items}
                    numberOfLines={undefined}
                    ellipsizeMode="tail">
                    {item.strMeal}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={() => (
            <ContentLoader viewBox="30 30 380 70" width={width} height={100}>
              <Rect x="20" y="17" rx="4" ry="4" width="900" height="93" />
            </ContentLoader>
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
export default ReceipeList;
