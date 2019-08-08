import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Photo = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Photo!</Text>
    </View>
  );
}

Photo.navigationOptions = {
  title: 'Photo',
  tabBarIcon: ({tintColor}) => <Icon name="plus-box-outline" size={25} color={tintColor}/>
};

export default Photo;
