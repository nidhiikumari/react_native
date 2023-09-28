import {View, Text, Image, ScrollView} from 'react-native';
import { styles } from '../styles/screenStyles/ReceipeDetails';
function ReceipeDetails({navigation, route}: any) {
  const {item} = route.params;
  // console.log(item);
  return (
    <View style={styles.detailsBox}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={styles.detailsPage}>
          <View
            style={styles.contentBox}>
            <Image
              source={item.image}
              style={styles.detailsScreenImage}
            />
          </View>
          <Text style={styles.items }>
            {item.name}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
          {/* <View style={{flexDirection: 'row', backgroundColor: 'yellow'}}>
            <View
              style={{
                backgroundColor: 'orange',
                paddingHorizontal: 16,
                borderRadius: 8,
                alignItems: 'center'
              }}>
              <Text style={{fontSize: 40}}>clock icon</Text>
              <Text style={{fontSize: 20}}>{item.time}</Text>
            </View>
            <View
              style={{
                backgroundColor: 'orange',
                paddingHorizontal: 16,
                borderRadius: 8,
                alignItems: 'center'
              }}>
              <Text style={{fontSize: 40}}>clock icon</Text>
              <Text style={{fontSize: 20}}>{item.time}</Text>
            </View>
            <View
              style={{
                backgroundColor: 'orange',
                paddingHorizontal: 16,
                borderRadius: 8,
                alignItems: 'center'
              }}>
              <Text style={{fontSize: 40}}>clock icon</Text>
              <Text style={{fontSize: 20}}>{item.difficulty}</Text>
              <Text style={{fontSize: 40}}>clock icon</Text>
              <Text style={{fontSize: 20}}>{item.difficulty}</Text>
              <Text style={{fontSize: 20, marginVertical: 16}}>
                {item.description}
              </Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}
export default ReceipeDetails;
