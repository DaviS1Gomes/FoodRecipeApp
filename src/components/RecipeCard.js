import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {colors} from "../Constant";


const RecipeCard = () => {

  const [recipe, setRecipes ] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
    .then((res) => res.json())
    .then((data) => {
      setRecipes(data.recipes)
    })
  })

  return (
    <View>
      <FlatList data={recipe} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => 
        <View style={styles.recipes}>
          <Image source={item.image}/>
          <Text>{item.name}</Text>
        </View>} />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  recipes: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 4,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: 'center',

  }
});
