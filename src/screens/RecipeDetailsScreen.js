import { StyleSheet, View, Text } from "react-native";
import React from "react";

const RecipeDetailsScreen = ({navigation, route}) => {
  const { item } = route.params
  return (
    <>

      <Text style={styles.recipeName}> {item.name} </Text>
      <Text style={styles.descriptionName}> {item.cuisine} </Text>

      <View style={styles.containerTDC}>

        <View style= {styles.minutosToComplete}>
          <Text style={styles.fontTDC}> Temp </Text>
          <Text style={styles.fontDescriptionTDC}> T </Text>
        </View>

        <View style= {styles.diffContainer}>
          <Text style={styles.fontTDC}> Diff </Text>
          <Text style={styles.fontDescriptionTDC}> D </Text>
        </View>

        <View style= {styles.caloriesContainer}>
          <Text style={styles.fontTDC}> CALO </Text>
          <Text style={styles.fontDescriptionTDC}> C </Text>
        </View>

      </View>

      <View style={styles.containerPassos}>

        <Text style={styles.fontPassos}> Ingredientes: </Text>

      {item.ingredients.map((ingredient) => {

      return (
        
        <View style={styles.ingredientsContainer} >
          <View style={styles.uniqueIngrediente} /> 
          <Text style={styles.fontIngredients}> {ingredient} </Text>
        </View>
       
      );

    })}
      </View>

      <View style={styles.containerPassos}>
        
        <Text style={styles.fontPassos}> Passos: </Text>

        {item.instructions.map((step) => {
          
      return (

        <View style={styles.instructionsContainer} >
          <View style={styles.uniqueIngrediente}/>
          <Text style={styles.fontIngredients}> {step} </Text>
        </View>

      );
    })}
      </View>
    </>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  recipeName: {
    marginTop: 150,
    fontSize: 28,
    fontWeight: "bold",
  },
  descriptionName: {
    fontSize: 20, 
    marginVertical: 16 
  },
  containerTDC: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "green",
    paddingHorizontal: 16,
  },
  minutosToComplete: {
    backgroundColor: "red",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
  },
  diffContainer: {
    backgroundColor: "yellow",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
  },
  caloriesContainer : {
    backgroundColor: "blue",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 26,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
  },
  ingredientsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  uniqueIngrediente: {
    backgroundColor: "red",
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  fontIngredients: {
    fontSize: 18, 
    marginLeft: 6
  },
  containerPassos: {
    alignSelf: "flex-start", 
    marginVertical: 22
  },
  fontPassos: { 
    fontSize: 22, 
    fontWeight: "600", 
    marginBottom: 6 
  },
  instructionsContainer : {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  fontTDC: {
    fontSize: 30
  },
  fontDescriptionTDC: {
    fontSize: 20, 
    fontWeight: 400 
  }
});
