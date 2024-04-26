import { encoded, translations } from "./data";

function decoded(data, dictionary) {
  const uniqueIds = {};

  const checkForUnique = (key) => {
    const excludeKeys = "groupId service formatSize ca";
    const includeTarget = (value, target = "Id") => value.includes(target);

    if (
      includeTarget(key) &&
      !(key in uniqueIds) &&
      !includeTarget(excludeKeys, key)
    ) {
      uniqueIds[key] = key;
    }
  };

  function convert(obj) {
    for (let key in obj) {
      checkForUnique(key);

      let current = obj[key];
      if (current in dictionary) {
        obj[key] = dictionary[current];
      }
    }
  }

  for (let i = 0; i < data.length; i += 1) {
    convert(data[i]);
  }

  return Object.values(uniqueIds);
}

console.log(decoded(encoded, translations));
