import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {styles} from '../styles/screenStyles/ReceipeDetails';

function Tab({setSelectedTab, selectedTab}: any) {
  return (
    <View>
      <ScrollView horizontal>
        {['Ingrediants', 'Instructions'].map((list: any) => (
          <Pressable
            style={styles.pressableTab}
            key={list}
            onPress={() => setSelectedTab(list)}>
            <Text
              style={[
                styles.tabText,
                {
                  color: list === selectedTab ? '#f4ca16' : 'black',
                },
              ]}>
              {list}
            </Text>
            {selectedTab === list && <View style={styles.lineIndicator} />}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
export default Tab;
