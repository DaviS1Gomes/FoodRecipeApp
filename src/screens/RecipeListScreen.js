import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React from 'react'
import Header from '../components/Header'
import SearchFilter from "../components/SearchFilter" 
import CategoriesFilter from '../components/CategoriesFilter'

const RecipeListScreen = () =>{
  return(
    <SafeAreaView style={styles.recipeSafeAreaView}>
      <Header headerText={"Lista de Receita"} headerIcon={"bell"}/>

    <SearchFilter icon ="search" placeholder={"Qual a receita de hoje?"}/>

    <View style={{marginTop: 22}}>
        <Text style={{fontSize:22, fontWeight:"bold"}}>Categorias</Text>
        <CategoriesFilter />
    </View>
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