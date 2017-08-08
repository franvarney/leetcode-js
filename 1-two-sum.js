function init(array) {
  let map = {};

  array.forEach((item) => {
    if (!map[item]) map[item] = 1;
    else ++map[item];
  });

  return map;
}

function twoSum(array, target) {
  if (array.length < 2) return false;

  for (let key in init(array)) {
    let find = target - key;

    if (find == key && map[key] > 1) {
      let index = array.indexOf(find);
      return [index, array.indexOf(find, index + 1)];
    } else if (find != key && map[find]) {
      return [array.indexOf(Number(key)), array.indexOf(find)];
    }
  }

  return false;
}
