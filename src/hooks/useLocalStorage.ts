import { useEffect, useState } from "react";

const getStorageValue = (key: string, defaultValue: any) => {
  const saved = localStorage.getItem(key) || JSON.stringify(defaultValue);
  const initial = JSON.parse(saved);
  return initial;
};

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
