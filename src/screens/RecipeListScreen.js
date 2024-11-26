import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.recipeSafeAreaView}>
      <Header headerText={"Welcome, "} headerIcon={"list"} />
      <SearchFilter icon="search" placeholder={"Which's the choice today?"} />

      <View>
        <Text style={styles.categoriesText}>Categories</Text>
        <CategoriesFilter />
      </View>

      <View>
        <Text style={styles.categoriesText}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  recipeSafeAreaView: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 35,
  },
  categoriesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
