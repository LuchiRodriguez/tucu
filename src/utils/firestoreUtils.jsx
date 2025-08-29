export const removeUndefinedFields = (obj) => {
  if (!obj || typeof obj !== "object") return obj;
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== undefined) {
        if (typeof value === "object" && !Array.isArray(value)) {
          newObj[key] = removeUndefinedFields(value); // Recursivo
        } else if (Array.isArray(value)) {
          newObj[key] = value.map((item) =>
            typeof item === "object" ? removeUndefinedFields(item) : item
          );
        } else {
          newObj[key] = value;
        }
      }
    }
  }
  return newObj;
};
