import { StyleSheet } from 'react-native';
import colorSet from "../themes/colors";
import { FontFamily, fontSet } from "../themes/fonts";


export const CommmonStyle= StyleSheet.create({
  tittleTextStyle: {
    color: colorSet.black,
    fontSize: fontSet.t4,
    fontWeight: 'bold',
    fontFamily: FontFamily.latoB
  },
  greetingText: {
    fontSize: fontSet.decimal2,
    fontFamily: FontFamily.robotoB,
    color: colorSet.yellow,
    fontWeight: 'bold'
    
  }
})