import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type MealItemType = {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  
}: MealItemType) => {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:'#ccc'}}>
        <View>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>{duration} m</Text>
          <Text style={styles.text}>{complexity.toUpperCase()}</Text>
          <Text style={styles.text}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation:4
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    padding: 8,
  },
  text:{
    color:'black',
    marginHorizontal:4,
    fontSize:12
  }
});
