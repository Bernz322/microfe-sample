import React, { useState, useEffect, useCallback } from "react";

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>,
  () => void
];

/**
 * Custom hook to use localStorage. If no initialValue is provided, typecast the value to the type you want when used inside a React Node.
 * @param key Storage key
 * @param initialValue Default value that will be used if there is no value in localStorage
 * @returns [value, setValue, removeValue]
 */

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const [value, setValue] = useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        throw new Error("Something went wrong while saving to local storage.");
      }
    }
  }, [value, key]);

  const removeValue = useCallback(() => {
    localStorage.removeItem(key);
    setValue(undefined);
  }, []);

  return [value, setValue, removeValue];
};
