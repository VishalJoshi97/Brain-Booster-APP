import { useEffect, useState } from "react";

export default function useTimer(initial: number) {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
