import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type CategoryProp = {
  title: string;
  color: string;
};

const CategoryGridTile = ({title, color}: CategoryProp) => {
  return (
    <View style={[styles.gridItem,{backgroundColor: color}]}>
      <Pressable android_ripple={{color:'#ccc'}} style={({pressed}) => [styles.button, pressed? styles.buttonPressed:null]} onPress={() => {}}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 6,
    overflow:'hidden'
  },
  button: {
    flex: 1,
  },
  buttonPressed:{
    opacity:0.9
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
