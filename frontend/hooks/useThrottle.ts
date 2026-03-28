import { useState, useEffect } from "react";

export default function useThrottle<T>(value: T, delay: number) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return throttledValue;
}
