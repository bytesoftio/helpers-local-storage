export const readLocalStorage = <S = object>(key: string, defaultValue?: S): S | undefined => {
  try {
    return JSON.parse(localStorage.getItem(key) || "") || defaultValue
  } catch (error) {
    return defaultValue
  }
}