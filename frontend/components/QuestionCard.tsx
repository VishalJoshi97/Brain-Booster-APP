import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  question: string;
}

const QuestionCard: React.FC<Props> = ({ question }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{question}</Text>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
  },
});
