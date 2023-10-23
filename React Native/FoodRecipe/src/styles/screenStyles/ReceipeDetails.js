import { StyleSheet } from 'react-native';
import colorSet from '../../themes/colors';
import { fontSet } from '../../themes/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
// details
detailsPage: {
  backgroundColor: colorSet.white,
  // flex: 1,
  top: -70,
  borderTopLeftRadius: 56,
  borderTopRightRadius: 56,
  alignItems: 'center',
  // paddingHorizontal: 16,
},
detailsBox: {
  // backgroundColor: colorSet.choco,
  flex: 1
},
contentView: {
  backgroundColor: colorSet.white,
  flex: 1,
  marginTop: 200,
  borderTopLeftRadius: 56,
  borderTopRightRadius: 56,
  alignItems: 'center',
  paddingHorizontal: 16,
},
contentBox: {
  // height: 300,
  // width: 300,
  // position: 'absolute',
  // top: -150,
},
detailsScreenImage: {
  // width: '100%', 
  // height: '100%',
  // resizeMode: 'contain',
  height: hp(40),
  width: wp(100),
  resizeMode: 'contain'
  // marginBottom: 5,
  // borderRadius: 16,
  // elevation: 7
},
items : {
  marginTop: 40,
  fontSize: fontSet.t4,
  fontWeight: 'bold',
  color: colorSet.black,
  textTransform: 'capitalize'
},
description: {
  fontSize: fontSet.t3,
  marginVertical: 16
}

});



 {/* <Text>Ingredients</Text> */}
              {/* <Text>{RecipeIngredients(item)}</Text> */}
              {/* </View> */}
              {/* <View>
                <Text>Measure</Text>
                <Text>{ReceipeMeasure(item)}</Text>
              </View>
              <View>
                <Text>Instructions</Text>
                <Text>{item?.strInstructions}</Text>
              </View> */}