// Отсутствующее число (сумма ариметической прогрессии)
function missingNumber(nums) {
  const n = nums.length;
  // Число один - это первый элемент последовательности (0 не считаем)
  const s = ((1 + n) / 2) * n;

  // А ниже - вычисление суммы арифметической прогрессии путём перебора
  // let s = 0;
  // for (let i = 0; i <= nums.length; i++) {
  //    s += i;
  // }

  return s - nums.reduce((acc, val) => (acc += val));
}

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
