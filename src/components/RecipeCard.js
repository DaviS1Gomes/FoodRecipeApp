import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const [recipe, setRecipes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => console.error("Erro ao buscar receitas:", error));
  }, []);

  return (
    <View>
      <FlatList
        data={recipe}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const totalMinutes = item.prepTimeMinutes + item.cookTimeMinutes;
          return (
            <Pressable 
              style={styles.recipes}
              onPress={() => navigation.navigate("RecipeDetails", {item: item})}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.imagesRecipes}
              />
              <Text style={styles.recipeName}>{item.name}</Text>
              {item.prepTimeMinutes && (
                <View style={styles.timeWrapper}>
                  <Text style={styles.prepTimeText}>Tempo total: </Text>
                  <Text style={styles.totalMinutes}>{totalMinutes} Min</Text>
                </View>
              )}
              <View style={styles.containerNota}>
                <Text>Nota: </Text>
                <Text style={styles.totalMinutes}>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </Pressable>
          );
        }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
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
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 15,
    flex: 1,
    marginHorizontal: 5,
  },

  imagesRecipes: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    marginBottom: 10,
    borderRadius: 15,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  prepTimeText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  totalMinutes: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    fontWeight: "bold",
  },
  timeWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerNota: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 5,
  },
});
