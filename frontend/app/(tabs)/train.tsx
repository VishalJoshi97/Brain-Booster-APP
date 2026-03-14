import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const exercises = [
  { id: "1", name: "Memory Test" },
  { id: "2", name: "Reaction Speed" },
  { id: "3", name: "Pattern Recognition" },
  { id: "4", name: "Math Challenge" },
];

export default function TrainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brain Training</Text>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});
