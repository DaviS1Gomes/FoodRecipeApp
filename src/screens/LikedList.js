import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../constants/Constant";

const LikedList = ({ navigation }) => {
  const [savedList, setSavedList] = useState([]);

  const fetchSavedList = async () => {
    try {
      const result = await AsyncStorage.getItem("savedFoods");
      const parsedList = result ? JSON.parse(result) : [];
      setSavedList(parsedList);
    } catch (error) {
      console.error("Error fetching saved list: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", fetchSavedList);
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("RecipeDetails", { item })}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCuisine}>{item.cuisine}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={35} color={colors.COLOR_PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Saved List!</Text>
      </SafeAreaView>

      <FlatList
        data={savedList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No recipes saved!</Text>}
      />
    </View>
  );
};

export default LikedList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: colors.COLOR_PRIMARY,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 20,
  },
  listContainer: {
    padding: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
  },
  itemCuisine: {
    fontSize: 14,
    color: "#777",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#777",
  },
});
