import React, { useState } from "react";
import { StyleSheet, FlatList, Alert } from "react-native";
import ColorButton from "./components/ColorButton";
import { generate } from "shortid";
import { useColors } from "./hooks";

//import defaultColors from "./data/defaultColors.json";
import ColorForm from "./components/ColorForm";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const { colors, addColor } = useColors();

  return (
    <>
      <ColorForm onNewColor={(newColor) => addColor(newColor)} />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
});
