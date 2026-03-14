import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brain Booster</Text>
      <Text style={styles.subtitle}>Boost your brain every day 🧠</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Daily Challenge</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
