// Найти факториал n-числа
function factorial(n) {
  if (n !== 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

console.log(factorial(5)); // 120 (5! = 5 * 4 * 3 * 2 * 1)
