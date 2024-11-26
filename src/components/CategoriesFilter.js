import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../constants/Constant";

const CategoriesFilter = () => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null); // Estado para armazenar a tag selecionada

  // Fetch data from the API
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        // Extract unique tags from the API response
        const allTags = data.recipes.flatMap((recipe) => recipe.tags || []);
        const uniqueTags = [...new Set(allTags)];
        setTags(uniqueTags);
      })
      .catch((error) => console.error("Erro ao buscar as receitas:", error));
  }, []);

  const handleTagPress = (tag) => {
    setSelectedTag(tag); // Atualiza o estado para a tag selecionada
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTagPress(tag)} // Handle tag press
            style={[
              styles.container,
              {
                backgroundColor:
                  selectedTag === tag ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
              },
            ]}
          >
            <Text
              style={[
                {
                  color: selectedTag === tag ? colors.COLOR_LIGHT : colors.COLOR_PRIMARY,
                },
                styles.categoriesText,
              ]}
            >
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 16,
    elevation: 4,
  },
  categoriesText: {
    fontSize: 18,
  },
});
