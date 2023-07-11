import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';

const Stack = createNativeStackNavigator()

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
        <Stack.Screen name='MealsOverview' component={MealsOverview}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
