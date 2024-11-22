import { StyleSheet, Text, View } from "react-native";
import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from '../screens/WelcomeScreen'
import RecipeListScreen from '../screens/RecipeListScreen'

const Stack = createNativeStackNavigator();
const appNavigator = () => {
  return(
      <Stack.Navigator screenOptions ={{headerShow: false}}>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Recipe' component={RecipeListScreen} />
      </Stack.Navigator>
  );
};

export default appNavigator;

const styles = StyleSheet.create ({

})