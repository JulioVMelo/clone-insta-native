import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}

Search.navigationOptions = {
  title: 'Search',
  tabBarIcon: ({tintColor}) => <Icon name="magnify" size={25} color={tintColor}/>
};

export default Search;
