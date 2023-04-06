import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText} testID="title-welcome">
        Seja bem-vindo!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  headerText: {
    color: "#353031",
    fontWeight: "bold",
    fontSize: 34,
    marginBottom: 10,
  },
});
