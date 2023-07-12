import {StyleSheet, FlatList, View} from 'react-native';
import React,{useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {useNavigation, useRoute} from '@react-navigation/native';
import MealItem from '../components/MealItem';

const MealsOverview = () => {
  const route = useRoute();
  const navigation=useNavigation()
  const {itemId} = route.params as {itemId: string};

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(itemId) >= 0;
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find(
        (category) => category.id===itemId
    )?.title
    navigation.setOptions({
        title:categoryTitle,
    })
  },[])
  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={item => {
          return (
            <MealItem
              title={item.item.title}
              imageUrl={item.item.imageUrl}
              duration={item.item.duration}
              complexity={item.item.complexity}
              affordability={item.item.affordability}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({});
