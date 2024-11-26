import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../constants/Constant";

const CategoriesFilter = () => {
  const [tags, setTags] = useState([]);

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

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tags.map((tag, index) => (
          <View
            key={index}
            style={[
              styles.container,
              {
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
              },
            ]}
          >
            <Text
              style={[
                { color: index === 0 ? colors.COLOR_LIGHT : colors.COLOR_PRIMARY },
                styles.categoriesText,
              ]}
            >
              {tag}
            </Text>
          </View>
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
