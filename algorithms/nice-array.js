/*
  A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array

  [2, 10, 9, 3] is a nice array because

   2 =  3 - 1
  10 =  9 + 1
   3 =  2 + 1
   9 = 10 - 1

  [4, 2, 3] is a nice array because

  4 = 3 + 1
  2 = 3 - 1
  3 = 2 + 1 (or 3 = 4 - 1)

  [4, 2, 1] is a not a nice array because

  for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
*/
function isNice(arr) {
  if (!arr.length) return false;

  const map = arr.reduce((acc, n) => {
    acc[n] = true;

    return acc;
  }, {});

  for (let n of arr) {
    const needed1 = n + 1;
    const needed2 = n - 1;

    if (!(needed1 in map || needed2 in map)) return false;
  }

  return true;
}

console.log(isNice([2, 10, 9, 3])); // true
console.log(isNice([3, 4, 5, 7])); // false
