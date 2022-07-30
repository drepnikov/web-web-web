// Найти максимальное число

// - Рекурсивно (вспоминай про базовый случай и рекурсивный)
function recursiveMax(arr) {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  } else {
    const subMax = recursiveMax(arr.slice(1));

    return arr[0] > subMax ? arr[0] : subMax;
  }
}

console.log("рекурсивно", recursiveMax([2, 4, 6, 5, 22, 1, 3])); // 22
console.log("рекурсивно", recursiveMax([7, 1, 2, 5, 6, 8, 9, 10, 3, 30])); // 30

// - С помощью метода двух указателей
function twoPointersMax(arr) {
  // Обрабатываем особый случай
  if (arr.length === 1) return arr[0];

  // Очищаем от дублей. Не уверен что нужно. Вомзожно преобразование в сет и обратно намного дороже чем пробежаться по исходному массиву с дублями
  const clearedFromDoubles = Array.from(new Set(arr));

  let l = 0;
  let r = clearedFromDoubles.length - 1;
  let max = -Infinity;

  while (l <= r) {
    const currentMax = clearedFromDoubles[l] > clearedFromDoubles[r] ? clearedFromDoubles[l] : clearedFromDoubles[r];

    max = currentMax > max ? currentMax : max;

    l++;
    r--;
  }

  return max;
}

console.log("метод двух указателей", twoPointersMax([2, 4, 6, 5, 22, 1, 3])); // 30
console.log("метод двух указателей", twoPointersMax([7, 1, 2, 5, 6, 8, 9, 10, 3, 30])); // 30
