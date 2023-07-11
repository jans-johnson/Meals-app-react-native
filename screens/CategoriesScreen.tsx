import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={item => {
        return (
          <CategoryGridTile title={item.item.title} color={item.item.color} />
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
