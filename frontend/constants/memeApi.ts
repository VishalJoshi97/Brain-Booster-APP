import axios from "axios";

export const fetchMemes = async () => {
  const res = await axios.get("http://localhost:8080/api/memes");
  return res.data;
};
