import {View, Text, Image, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../styles/screenStyles/Home';

function ReceipeList({categoryWiseList}: any) {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={categoryWiseList?.meals}
        renderItem={({item}: any) => (
          <Pressable
            onPress={() => navigation.navigate('ReceipeDetail', {item: item})}
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
                {/* <View style={styles.time}>
                <Text style={styles.items}>{item.time}</Text>
                <Text style={styles.items}>{item.rating}</Text>
              </View> */}
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
    </View>
  );
}
export default ReceipeList;
