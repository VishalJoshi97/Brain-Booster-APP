import { useEffect, useState } from "react";

export default function useMemes() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/memes")
      .then(res => res.json())
      .then(data => setMemes(data));
  }, []);

  return memes;
}
