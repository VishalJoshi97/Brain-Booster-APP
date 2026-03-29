import { useQuery } from "@tanstack/react-query";
import { fetchMemes } from "../services/memeApi";

export default function useMemesQuery() {
  return useQuery({
    queryKey: ["memes"],
    queryFn: fetchMemes,
  });
}
