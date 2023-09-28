import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/screenStyles/Home';

const foodList = [
  {
    id: '01',
    name: 'tuna tartare',
    image: require('../../assests/images/oats.jpg'),
    rating: '4.2',
    ingredients: ['fresh tuna', 'lime juice', 'red onion', 'avocado'],
    time: '40 mins',
    difficulty: 'medium',
    calories: '420 cal',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
  },
  {
    id: '02',
    name: 'tuna tartare',
    image: require('../../assests/images/oats.jpg'),
    rating: '4.2',
    ingredients: ['fresh tuna', 'lime juice', 'red onion', 'avocado'],
    time: '40 mins',
    difficulty: 'medium',
    calories: '420 cal',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
  },
  {
    id: '03',
    name: 'tuna tartare',
    image: require('../../assests/images/oats.jpg'),
    rating: '4.2',
    ingredients: ['fresh tuna', 'lime juice', 'red onion', 'avocado'],
    time: '40 mins',
    difficulty: 'medium',
    calories: '420 cal',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
  },
  {
    id: '04',
    name: 'tuna tartare',
    image: require('../../assests/images/oats.jpg'),
    rating: '4.2',
    ingredients: ['fresh tuna', 'lime juice', 'red onion', 'avocado'],
    time: '40 mins',
    difficulty: 'medium',
    calories: '420 cal',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
  },
  {
    id: '05',
    name: 'tuna tartare',
    image: require('../../assests/images/oats.jpg'),
    rating: '4.2',
    ingredients: ['fresh tuna', 'lime juice', 'red onion', 'avocado'],
    time: '40 mins',
    difficulty: 'medium',
    calories: '420 cal',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
  },
  {
    id: '06',
    name: 'tuna tartare',
    image: require('../../assests/images/oats.jpg'),
    rating: '4.2',
    ingredients: ['fresh tuna', 'lime juice', 'red onion', 'avocado'],
    time: '40 mins',
    difficulty: 'medium',
    calories: '420 cal',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
  },
  {
    id: '07',
    name: 'tuna tartare',
    image: require('../../assests/images/oats.jpg'),
    rating: '4.2',
    ingredients: ['fresh tuna', 'lime juice', 'red onion', 'avocado'],
    time: '40 mins',
    difficulty: 'medium',
    calories: '420 cal',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'
  },
];

function ReceipeList() {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={foodList}
        renderItem={({item}: any) => (
          <Pressable
            onPress={() => navigation.navigate("ReceipeDetail", {item: item})}
            style={styles.receipeList}>
            <Image
              source={item.image}
              style={styles.receipeImage}
            />
            <Text>{item.name}</Text>
            <View style={styles.itemsBox}>
              <Text>{item.time}</Text>
              <Text></Text>
              <View>
                <Text>{item.rating}</Text>
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
