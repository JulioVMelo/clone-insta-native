import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const History = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>History!</Text>
    </View>
  );
}

History.navigationOptions = {
  title: 'History',
  tabBarIcon: ({tintColor}) => <Icon name="heart-outline" size={25} color={tintColor}/>,
};

export default History;
