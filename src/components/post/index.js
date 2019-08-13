import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    marginTop: 10,
    marginBottom: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 5,
  },
  content: {
    height: 400,
    marginTop:5
  }
});

const Post = () => (
  <View style={styles.post}>
    <View style={styles.header}>
      <View style={styles.profile}>
        <Image 
          source={{uri: 'https://avatars0.githubusercontent.com/u/8390491?s=460&v=4'}} 
          style={styles.image}/>

        <Text style={{fontSize: 14, fontWeight: '500'}}>
          Júlio V Melo
        </Text>
      </View>
      <Icon 
        name="dots-horizontal" 
        size={25} 
        color="#000" />
    </View>
    <View style={styles.content}>
      <Image 
        source={{uri: 'https://s2.glbimg.com/hlgR-qJypOZlCzDt-Pf0zSvWncc=/0x0:1994x1329/1600x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/08/05/50780554_2211188785799035_7370514336382451712_o.jpg'}}
        style={{flex: 1}} resizeMode="cover" />
    </View>
  </View>
);

export default Post;
