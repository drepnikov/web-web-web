// Какие числа дадут нужную сумму (Метод двух указателей + другие решения)
function sumOfTwoDigits(arr, sum) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === sum) return [arr[left], arr[right]];
    if (currentSum > sum) right--;
    if (currentSum < sum) left++;
  }

  return [];
}

console.log(sumOfTwoDigits([-9, -5, -2, -1, 1, 4, 9, 11], 3)); // [-1, 4]
