import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.MainImage}
        source={require("../../assets/images/MainImage.png")}
      />
      <Text style={styles.MainText}>
        Sabores que transformam momentos únicos
      </Text>

      <TouchableOpacity
        style={styles.MainButton}
        onPress={() => {
          navigation.navigate("Recipe");
        }}
      >
        <Text style={styles.ButtonText}>Ver Receitas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    alignItems: "center",
  },
  MainImage: {
    width: 525,
    height: 525,
  },
  MainText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  MainButton: {
    backgroundColor: "#EEAD2D",
    paddingVertical: 20,
    borderRadius: 18,
    width: "80%",
    alignItems: "center",
  },
  ButtonText: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 22.5,
  },
});
