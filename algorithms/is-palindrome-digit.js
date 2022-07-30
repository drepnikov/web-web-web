var isPalindromeDigit = function (x) {
  // Способ с reverse
  // return x.toString() === [...x.toString()].reverse().join("");

  /*  Способ с методом двух указателей
  let stringX = x.toString();

  let left = 0;
  let right = stringX.length - 1;

  while (left < right) {
   if (stringX[left] !== stringX[right]) return false;

  left++;
  right--;
   }

  return true;
 */

  const stringX = x.toString();

  for (let i = 0; i < stringX.length; i++) {
    const straightChar = stringX[i];
    const fromEndChar = stringX[stringX.length - i - 1];

    if (straightChar !== fromEndChar) return false;
  }

  return true;
};

console.log(isPalindromeDigit(121)); // true
console.log(isPalindromeDigit(123)); // false
console.log(isPalindromeDigit(12321)); // true
console.log(isPalindromeDigit(123212321)); // true
console.log(isPalindromeDigit(12212321)); // false
