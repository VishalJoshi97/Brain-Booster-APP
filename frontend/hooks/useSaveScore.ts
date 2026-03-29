import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function useSaveScore() {
  return useMutation({
    mutationFn: (score: number) =>
      axios.post("http://localhost:8080/api/score", { score }),
  });
}
