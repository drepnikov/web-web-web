// Нужно очистить строку от пар одинаковых букв в разных регистрах
function cleanFromDoubleLetters(s) {
  /* Мое решение
   let l = 0;
   let r = 1;
   let result = s;

   while (r < result.length) {
   const char1 = result[l];
   const char2 = result[r];

 if (
   char2 !== char1 &&
   (char2 === char1.toLowerCase() || char2 === char1.toUpperCase())
   ) {
   result = result.slice(0, l) + result.slice(r + 1);

  l = 0;
  r = 1;
   } else {
   l++;
   r++;
    }
   }

   return result;
     */

  let stackResult = [];

  for (let currentChar of s) {
    if (!stackResult.length) {
      stackResult.push(currentChar);
      continue;
    }

    const charFromStack = stackResult[stackResult.length - 1];

    if (
      currentChar !== charFromStack &&
      (currentChar === charFromStack.toLowerCase() || currentChar === charFromStack.toUpperCase())
    ) {
      stackResult.pop();
    } else {
      stackResult.push(currentChar);
    }
  }

  return stackResult.join("");
}

console.log(cleanFromDoubleLetters("leEeetcode")); // leetcode
console.log(cleanFromDoubleLetters("fAang")); // fng
console.log(cleanFromDoubleLetters("abBAcC")); // ""
