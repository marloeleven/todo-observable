import { STRING } from "const/variableTypes";

export default namespace => {
  return {
    set: value =>
      window.localStorage.setItem(
        namespace,
        typeof value === STRING ? value : JSON.stringify(value)
      ),
    get: defaultValue => {
      const value = window.localStorage.getItem(namespace);

      if (value && typeof value === STRING) {
        return JSON.parse(value);
      }
      return defaultValue;
    }
  };
};
