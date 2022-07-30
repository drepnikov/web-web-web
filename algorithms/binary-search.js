// Реализовать бинарный поиск. Найти индекс элемента, в отсортированном списке
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) return middle;
    if (target > arr[middle]) left = middle + 1;
    if (target < arr[middle]) right = middle - 1;
  }

  return -1;
}

console.log(binarySearch([2, 4, 6, 8, 9, 12, 15, 19, 23, 25, 28, 35, 56], 28)); // 10
