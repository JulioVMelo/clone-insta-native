import React from 'react';
import { View, Text } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
// import { Container } from './styles';

const User = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User!</Text>
    </View>
  );
}

User.navigationOptions = {
  title: 'User',
  tabBarIcon: ({tintColor}) => <IconFA name="user-o" size={25} color={tintColor} />
};

export default User;
