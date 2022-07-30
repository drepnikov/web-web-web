// Самая большая сумма последовательности из 5 чисел (вернуть числа) (метод скользящего окна)

// -- Удаляя предыдущий и прибавляя следующий
function biggerSumOfFive(arr) {
  // инициируем начальную максимальную сумму, суммировав 5 первых членов
  let result = arr.slice(0, 5);
  let currentSum = result.reduce((acc, n) => (acc += n));
  let largestSum = currentSum;

  for (let i = 1; i + 5 <= arr.length; i++) {
    // "сдвигаем" удаляя предыдщуий элемент...
    currentSum -= arr[i - 1];
    // ...и прибавляя следующий
    currentSum += arr[i + 4];

    if (currentSum > largestSum) {
      largestSum = currentSum;
      result = arr.slice(i, i + 5);
    }
  }

  return result;
}

// -- Array slice
function arraySliceBiggerSumOfFive(arr) {
  let slice = [];
  let max = -Infinity;

  for (let i = 0; i + 5 <= arr.length; i++) {
    const currentSlice = arr.slice(i, i + 5);
    const currentSum = currentSlice.reduce((acc, n) => (acc += n));

    if (currentSum > max) {
      max = currentSum;
      slice = currentSlice;
    }
  }

  return slice;
}

console.log("Удаляя предыдущий и прибавляя следующий", biggerSumOfFive([5, 7, 1, 4, 3, 6, 2, 9, 2])); // [4, 3, 6, 2, 9]
console.log("С помощью array slice", arraySliceBiggerSumOfFive([5, 7, 1, 4, 3, 6, 2, 9, 2])); // [4, 3, 6, 2, 9]
