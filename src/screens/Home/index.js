import React from 'react';
import Story from '../../components/story';
import Post from '../../components/post'
import { View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    justifyContent: 'space-between',
  },
});


const Home = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#f2f2f2' }} />
      
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon style={{width:60}} name="camera" size={25} color="#000"/>
          <Image source = {require('../../assets/images/logoInsta.png')} style = {{ width: 130, height: 40 }} resizeMode="contain" />
          
          <View style={styles.headerActions}>
            <Image source = {require('../../assets/images/igtv.png')} style = {{ width: 27, height: 27 }} resizeMode="contain" />
            <Icon name="paper-plane" size={20} color="#000"/>
          </View>
        </View>
        <View>
          <Story />
          <ScrollView>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

Home.navigationOptions = {
  title: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={25} color={tintColor}/>
};

export default Home;
