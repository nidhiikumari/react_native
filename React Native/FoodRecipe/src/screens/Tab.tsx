import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';

function Tab({setSelectedTab, selectedTab}: any) {
  return (
    <View>
      <ScrollView horizontal>
        {['Ingrediants', 'Instructions'].map((list: any) => (
          <Pressable
            style={{
              padding: 34,
              alignItems: 'center',
            }}
            key={list}
            onPress={() => setSelectedTab(list)}>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>
              {list}
            </Text>
            {selectedTab === list && (
              <View
                style={{
                  height: 1,
                  backgroundColor: 'yellow',
                  width: 100,
                  borderWidth: 0.5,
                  margin: 3
                }}
              />
            )}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
export default Tab;
