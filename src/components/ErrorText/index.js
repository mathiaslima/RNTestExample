import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function ErrorText({ messages = [] }) {
  const displayMessages = messages.filter((msg) => msg !== undefined);

  return (
    <View style={styles.errorContainer}>
      {displayMessages.map((msg) => (
        <Text key={msg} style={styles.errorText}>
          {msg}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    paddingVertical: 10,
  },
  errorText: {
    fontSize: 14,
    color: "#cc0011",
  },
});
