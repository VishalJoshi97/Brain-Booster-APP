import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  score: number;
}

const ScoreCircle: React.FC<Props> = ({ score }) => {
  return (
    <View style={styles.circle}>
      <Text style={styles.text}>{score}</Text>
    </View>
  );
};

export default ScoreCircle;

const styles = StyleSheet.create({
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
