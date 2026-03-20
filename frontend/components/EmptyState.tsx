import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  message: string;
}

const EmptyState: React.FC<Props> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
});
