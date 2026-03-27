import React from "react";
import { FlatList } from "react-native";
import MemeCard from "../components/MemeCard";
import useMemes from "../hooks/useMemes";

export default function MemeScreen() {
  const memes = useMemes();

  return (
    <FlatList
      data={memes}
      renderItem={({ item }) => (
        <MemeCard imageUrl={item.imageUrl} />
      )}
    />
  );
}
