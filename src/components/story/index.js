import React from 'react';

import { View, Image, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  story: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#C72D8F',
    marginHorizontal: 10,
  }
});

const story = () => (
  <View style={styles.story}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
      <Image source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} style={styles.image}/>
    </ScrollView>
  </View>
);

export default story;
