import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  score: number;
  level: string;
}

const BrainScoreCard: React.FC<Props> = ({ score, level }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.level}>{level}</Text>
    </View>
  );
};

export default BrainScoreCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    alignItems: "center",
  },
  score: {
    fontSize: 32,
    fontWeight: "bold",
  },
  level: {
    fontSize: 18,
    color: "gray",
  },
});
