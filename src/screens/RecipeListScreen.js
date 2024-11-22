import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from 'react'
import Header from '../components/Header'
import SearchFilter from "../components/SearchFilter" 

const RecipeListScreen = () =>{
  return(
    <SafeAreaView style={styles.recipeSafeAreaView}>
      <Header headerText={"Lista de Receita"} headerIcon={"bell"}/>
    <SearchFilter icon ="search" placeholder={"bote sua receita favorita"}/>
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