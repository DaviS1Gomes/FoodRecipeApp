import { StyleSheet, View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";


const RecipeDetailsScreen = ({navigation, route}) => {
  const { item } = route.params
  const totalMinutes = item.prepTimeMinutes + item.cookTimeMinutes

  return (
    <>
    <View style={{ backgroundColor:"#6F4E37", flex:1}}>
      <SafeAreaView style={{flexDirection:'row', marginHorizontal:16}}>
        <Pressable style={{flex:1}} onPress={() => navigation.goBack( )}>
          <FontAwesome name={"arrow-circle-left"} size={35} color="#fff" />
        </Pressable>
        
        <FontAwesome name={"heart-o"} size={35} color="#fff" />
      </SafeAreaView>
      <View style={{backgroundColor:"#fff", flex:1, marginTop: 240, borderTopLeftRadius:56, borderTopRightRadius:56, alignItems:"center"}}>
        <View style={{ 
          height:300, 
          width:300, 
          position: 'absolute', 
          top:-150}}>
           <Image 
            source={{ uri: `https://cdn.dummyjson.com/recipe-images/${item.id}.webp` }} 
            style={{width:"100%", height:"100%", resizeMode:"contain" }} /> 
        </View>

      <Text style={styles.recipeName}> {item.name} </Text>
      <Text style={styles.descriptionName}> {item.cuisine} </Text>

      <View style={styles.containerTDC}>

        <View style= {styles.minutosToComplete}>
          <Text style={styles.fontTDC}> Temp </Text>
          <Text style={styles.fontDescriptionTDC}> {totalMinutes} </Text>
        </View>

        <View style= {styles.diffContainer}>
          <Text style={styles.fontTDC}> Diff </Text>
          <Text style={styles.fontDescriptionTDC}>{item.difficulty}</Text>
        </View>

        <View style= {styles.caloriesContainer}>
          <Text style={styles.fontTDC}> CALO </Text>
          <Text style={styles.fontDescriptionTDC}> {item.caloriesPerServing} Cal</Text>
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
      </View>
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
