// Вернуть true, если массив содержит элементы-дубликаты, иначе - false
function containsDuplicate(nums) {
  const map = {};

  for (let value of nums) {
    if (value in map) return true;
    map[value] = true;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
