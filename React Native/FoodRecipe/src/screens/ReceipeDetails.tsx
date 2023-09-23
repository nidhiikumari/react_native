import {View, Text, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
function ReceipeDetails({navigation, route}: any) {
  const {item} = route.params;
  console.log(item);
  return (
    <View style={{backgroundColor: '#6f4e37', flex: 1}}>
      {/* <SafeAreaView>

        </SafeAreaView> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            marginTop: 200,
            borderTopLeftRadius: 56,
            borderTopRightRadius: 56,
            alignItems: 'center',
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              //    backgroundColor: 'red',
              height: 300,
              width: 300,
              position: 'absolute',
              top: -150,
            }}>
            <Image
              source={item.image}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
          <Text style={{marginTop: 140, fontSize: 28, fontWeight: 'bold'}}>
            {item.name}
          </Text>
          {/* <View style={{flex: 1}}> */}
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <Text style={{fontSize: 20, marginVertical: 16}}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', backgroundColor: 'yellow'}}>
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
          </View>
          {/* </ScrollView> */}
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
}
export default ReceipeDetails;
