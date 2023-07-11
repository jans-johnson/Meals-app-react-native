import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const CategoriesScreen = () => {
    const navigation=useNavigation<NativeStackNavigationProp<any>>()
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={item => {
        return (
          <CategoryGridTile title={item.item.title} color={item.item.color} onPress={()=>{
            navigation.push('MealsOverview',{
                itemId:item.item.id
            })
          }}/>
        );
      }}
      numColumns={2}
      style={{backgroundColor:'#52261C'}}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({

});
