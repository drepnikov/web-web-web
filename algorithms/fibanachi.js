// Циклом
function fibanachiCycle(n) {
  if (n <= 0) return 0;

  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    const current = a + b;

    a = b;
    b = current;
  }

  return b;
}

console.log("циклом", fibanachiCycle(3)); // 2
console.log("циклом", fibanachiCycle(4)); // 3
console.log("циклом", fibanachiCycle(5)); // 5
console.log("циклом", fibanachiCycle(6)); // 8
console.log("циклом", fibanachiCycle(7)); // 13

// Рекурсивно
function fibanachiRecursive(n) {
  if (n <= 0) return 0;

  if (n === 1 || n === 2) return 1; // или так: if (n <= 2) return 1; (ведь на 0 и ниже мы уже обработали)

  return fibanachiRecursive(n - 1) + fibanachiRecursive(n - 2);
}

console.log("рекурсивно", fibanachiRecursive(3)); // 2
console.log("рекурсивно", fibanachiRecursive(4)); // 3
console.log("рекурсивно", fibanachiRecursive(5)); // 5
console.log("рекурсивно", fibanachiRecursive(6)); // 8
console.log("рекурсивно", fibanachiRecursive(7)); // 13
