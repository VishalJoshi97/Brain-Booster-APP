import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  progress: number;
}

const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${progress}%` }]} />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
});
