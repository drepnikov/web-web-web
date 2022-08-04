function longestPrefix(strs) {
  const word = strs[0].split("");
  let result = "";

  for (let [charIndex, char] of word.entries()) {
    for (let i = 1; i < strs.length; i++) {
      const nextWord = strs[i];

      if (nextWord[charIndex] !== char) {
        return result;
      }
    }

    result += char;
  }

  return result;
}

console.log(longestPrefix(["linee", "lineen", "lineery"]));
