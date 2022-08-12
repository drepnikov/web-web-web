// Все подстроки слова
function allSubstrings(str) {
  const result = [""];

  for (
    let subStringLength = 1;
    subStringLength <= str.length;
    subStringLength++
  ) {
    for (let k = 0; k <= str.length - subStringLength; k++) {
      result.push(str.slice(k, k + subStringLength));
    }
  }

  return result;
}

console.log(allSubstrings("cat")); // ["", "c", "a", "t", "ca", "at", "cat"]
console.log(allSubstrings("terem")); // ["", "t", "e", "r", "e", "m", "te", "er", "re", "em", "ter", "ere", "rem", "tere", "erem", "terem"]
