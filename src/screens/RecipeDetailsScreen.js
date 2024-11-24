import { StyleSheet, View, Text } from "react-native";
import React from "react";


const RecipeDetailsScreen = ({}) => {
  return (
    
<>
    {/* NOME DA RECEITA */}
    <Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold" }}>
      {/*{item.name}*/}
      NOME EXEMPLO
    </Text>

  {/* DESCRIÇÃO */}
  <Text style={{ fontSize: 20, marginVertical: 16}}>
    {/*{item.description}*/}
    Texto exemplo
  </Text>

      {/* View com 3 quadrados */}
      <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "green",
        paddingHorizontal: 16,
      }}>

        {/* Quadrado 1 */}
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 26,
            borderRadius: 8,
            alignItems: "center",
            marginHorizontal: 8,
          }}
        >
          <Text style={{ fontSize: 30 }}>Temp</Text>
          <Text style={{ fontSize: 20, fontWeight: 400 }}>T</Text>
        </View>

        {/* Quadrado 2 */}
        <View
          style={{
            backgroundColor: "orange",
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 26,
            borderRadius: 8,
            alignItems: "center",
            marginHorizontal: 8,
          }}
        >
          <Text style={{ fontSize: 30 }}>Diff</Text>
          <Text style={{ fontSize: 20, fontWeight: 400 }}>D</Text>
        </View>

        {/* Quadrado 3 */}
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 26,
            borderRadius: 8,
            alignItems: "center",
            marginHorizontal: 8,
          }}
        >
          <Text style={{ fontSize: 30 }}>CALO</Text>
          <Text style={{ fontSize: 20, fontWeight: 400 }}>C</Text>
        </View>

    </View>

    {/*ingredientes*/}
    <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>Ingredientes:</Text>

        {/*{item.ingredients.map((ingredient) => {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 4,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              height: 10,
              width: 10,
              borderRadius: 5,
            }}
          ></View>
          <Text style={{ fontSize: 18, marginLeft: 6 }}>
              {ingredient}
            </Text>
        </View>
      );
    })}*/}
      </View>

    {/*PASSOS*/}
      <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>Passos:</Text>

        {/*{item.steps.map((step) => {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 4,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              height: 10,
              width: 10,
              borderRadius: 5,
            }}
          ></View>
          <Text style={{ fontSize: 18, marginLeft: 6 }}>
              {step}
            </Text>
        </View>
      );
    })}*/}
      </View></>

      
  );
};

export default RecipeDetailsScreen;
