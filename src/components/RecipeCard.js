import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../constants/Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const fetchRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  return data.recipes || [];
};

const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro
  const navigation = useNavigation();

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        setLoading(true);
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (err) {
        setError("Erro ao carregar receitas. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };
    loadRecipes();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={colors.COLOR_PRIMARY} />
        <Text>Carregando receitas...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const totalMinutes =
            (item.prepTimeMinutes || 0) + (item.cookTimeMinutes || 0);
          return (
            <Pressable
              style={styles.recipes}
              onPress={() =>
                navigation.navigate("RecipeDetails", { item: item })
              }
            >
              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={styles.imagesRecipes}
                />
              )}
              <Text style={styles.recipeName}>{item.name || "Sem Nome"}</Text>
              {item.prepTimeMinutes && (
                <View style={styles.timeWrapper}>
                  <Text style={styles.prepTimeText}>Tempo total: </Text>
                  <Text style={styles.totalMinutes}>{totalMinutes} Min</Text>
                </View>
              )}
              <View style={styles.containerNota}>
                <Text>Nota: </Text>
                <Text style={styles.totalMinutes}>
                  {item.rating || "N/A"}
                </Text>
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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
});
