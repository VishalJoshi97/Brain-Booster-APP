import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: any;
  color: string;
  size: number;
}

const TabIcon: React.FC<Props> = ({ name, color, size }) => {
  return <Ionicons name={name} color={color} size={size} />;
};

export default TabIcon;
