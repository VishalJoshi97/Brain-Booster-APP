import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  option: string;
  onPress: () => void;
}

const OptionButton: React.FC<Props> = ({ option, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{option}</Text>
    </TouchableOpacity>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
});
