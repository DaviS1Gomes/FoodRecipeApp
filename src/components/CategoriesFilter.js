import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { categories, colors } from "../Constant";

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              key={`${category.category}-${index}`}
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
                  { color: index === 0 && colors.COLOR_LIGHT },
                  styles.categoriesText,
                ]}
              >
                {category.category}
              </Text>
            </View>
          );
        })}
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
