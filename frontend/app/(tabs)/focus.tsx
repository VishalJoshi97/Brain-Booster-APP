import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function FocusScreen() {
  const [time, setTime] = useState(25);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus Mode</Text>

      <Text style={styles.timer}>{time}:00</Text>

      <Button title="Start Focus Session" onPress={() => {}} />
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
    fontSize: 26,
    fontWeight: "bold",
  },
  timer: {
    fontSize: 48,
    marginVertical: 20,
  },
});
