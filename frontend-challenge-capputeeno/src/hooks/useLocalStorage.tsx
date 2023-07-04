import { useState } from 'react'

export function useLocalStorage<T>(shoppingItemKey: string) {
  const [item, setItem] = useState(JSON.parse(localStorage.getItem(shoppingItemKey) ?? ''))

  const updateLocalStorage = (newValue: T) => {
    setItem(newValue);
    localStorage.setItem(shoppingItemKey, JSON.stringify(newValue))
  }
  return {
    item,
    updateLocalStorage,
  }
}
