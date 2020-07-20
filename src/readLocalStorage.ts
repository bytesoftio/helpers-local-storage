export const readLocalStorage = <TValue = object>(key: string, defaultValue?: TValue): TValue | undefined => {
  try {
    return JSON.parse(localStorage.getItem(key) || "") || defaultValue
  } catch (error) {
    return defaultValue
  }
}
