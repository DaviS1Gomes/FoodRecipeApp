import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from 'react'
import Header from '../components/Header'

const RecipeListScreen = () =>{
  return(
    <SafeAreaView style={styles.recipeSafeAreaView}>
      <Header headerText={"Hello"} headerIcon={"bell-o"}/>
    </SafeAreaView>
  )
}

export default RecipeListScreen;

const styles = StyleSheet.create({
  recipeSafeAreaView: {
    flex: 1,
    marginHorizontal: 16
  }
})