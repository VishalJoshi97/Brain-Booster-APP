import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#222",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});
