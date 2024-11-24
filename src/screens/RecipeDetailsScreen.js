import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const totalMinutes = item.prepTimeMinutes + item.cookTimeMinutes;

  return (
    <>
      <View style= {styles.container}>

        <SafeAreaView style= {styles.icons}>
          <Pressable style= {{ flex: 1 }} onPress={() => navigation.goBack()}>
            <FontAwesome name={"arrow-circle-left"} size={35} color="#fff" />
          </Pressable>
            <FontAwesome name={"heart-o"} size={35} color="#fff" />
        </SafeAreaView>

        <View style= {styles.whiteContainer}>
          <View style={styles.imageContainer} >
            <Image
              source={{ uri: item.image }} 
              style={styles.image}
            />
          </View>

          <Text style={styles.recipeName}> {item.name} </Text>
          <Text style={styles.descriptionName}> {item.cuisine} </Text>

          <View style={styles.containerTDC}>
            <View style={styles.minutosToComplete}>
              <Text style={styles.fontTDC}>⏰</Text>
              <Text style={styles.fontDescriptionTDC}> {totalMinutes} Min(s)</Text>
            </View>

            <View style={styles.diffContainer}>
              <Text style={styles.fontTDC}>🥣</Text>
              <Text style={styles.fontDescriptionTDC}>{item.difficulty}</Text>
            </View>

            <View style={styles.caloriesContainer}>
              <Text style={styles.fontTDC}>🔥</Text>
              <Text style={styles.fontDescriptionTDC}>
                {" "}
                {item.caloriesPerServing} Cal
              </Text>
            </View>
          </View>

          <View style={styles.containerPassos}>
            <Text style={styles.fontPassos}> Ingredientes: </Text>

            {item.ingredients.map((ingredient) => {
              return (
                <View style={styles.ingredientsContainer}>
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
                <View style={styles.instructionsContainer}>
                  <View style={styles.uniqueIngrediente} />
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
  container: {
     backgroundColor: "#6F4E37", 
    flex: 1 
  },
  icons: { 
    flexDirection: "row", 
    marginHorizontal: 16,
    marginTop: 22.5},
  recipeName: {
    marginTop: 175,
    fontSize: 28,
    fontWeight: "bold",
  },
  whiteContainer : {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
    position: "absolute",
    top: -150,
  },
  descriptionName: {
    fontSize: 20,
    marginVertical: 16,
  },
  containerTDC: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16,
  },
  minutosToComplete: {
    backgroundColor: "rgba(255,0,0,0.38)",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
    alignItems: 'center',
  },
  diffContainer: {
    backgroundColor: "rgba(135,206,235,0.8)",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,

  },
  caloriesContainer: {
    backgroundColor: "rgba(255,165,0,048)",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
  },
  ingredientsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
    marginLeft: 20
  },
  uniqueIngrediente: {
    backgroundColor: "red",
    height: 10,
    width: 10,
    borderRadius: 5,
    
  },
  fontIngredients: {
    fontSize: 18,
    marginLeft: 6,
  },
  containerPassos: {
    alignSelf: "flex-start",
    marginVertical: 22,
  },
  fontPassos: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 6,
  },
  instructionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  fontTDC: {
    fontSize: 40,
  },
  fontDescriptionTDC: {
    fontSize: 17.5,
    fontWeight: 400,
  },
  image: {
    width: "100%", 
    height: "100%", 
    resizeMode: "contain",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 4,
  }
});
