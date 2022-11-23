// component of input react native

import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

export function Input({ label, error, ...rest }) {
  const containerStyles = [styles.inputContainer];
  if (error) {
    containerStyles.push(styles.inputContainerError);
  }
  return (
    <View style={containerStyles}>
      <Text style={styles.inputLabel}>{label}</Text>

      <View style={styles.row}>
        <TextInput autoCapitalize="none" style={styles.input} {...rest} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f4f6f8",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    width: "100%",
    borderColor: "#f4f6f8",
  },
  inputContainerError: {
    borderColor: "#cc0011",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputLabel: {
    fontSize: 10,
    color: "#b4b6b8",
  },
  input: {
    color: "#353031",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 3,
    marginRight: 10,
    flex: 1,
  },
});
