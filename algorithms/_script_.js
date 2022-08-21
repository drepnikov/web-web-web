function lengthOfLongestUnique(arr) {
  let maxLength = 0;
  let unique = new Set();

  for (let n of arr) {
    while (unique.has(n)) {
      const firstValue = unique.values().next().value;

      unique.delete(firstValue);
    }

    unique.add(n);

    maxLength = Math.max(maxLength, unique.size);
  }

  return maxLength;
}

console.log(lengthOfLongestUnique([1, 2, 3, 1, 2, 3, 2, 2])); // [1,2,3]
console.log(lengthOfLongestUnique([1, 1, 1, 1, 1])); //1 [1]
console.log(lengthOfLongestUnique([1, 2, 2, 3, 4, 2])); //3 [2,3,4]
