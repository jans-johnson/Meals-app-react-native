import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsOverview from './screens/MealsOverview';
import FavouritesScreen from './screens/FavouritesScreen';
import FavouritesContextProvider from './store/context/favoutires-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  function Home():JSX.Element{
    return(
      <Drawer.Navigator>
        <Drawer.Screen name='Categories' component={CategoriesScreen}/>
        <Drawer.Screen name='favourites' component={FavouritesScreen}/>
      </Drawer.Navigator>
    )
  }

  return (
    <FavouritesContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='MealsOverview' component={MealsOverview}/>
      </Stack.Navigator>
    </NavigationContainer>
    </FavouritesContextProvider>
  );
}

export default App;
