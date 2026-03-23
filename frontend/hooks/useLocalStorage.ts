import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function useLocalStorage(key: string) {
  const [value, setValue] = useState<string | null>(null);

  const save = async (data: string) => {
    await AsyncStorage.setItem(key, data);
    setValue(data);
  };

  const load = async () => {
    const data = await AsyncStorage.getItem(key);
    setValue(data);
  };

  return { value, save, load };
}
