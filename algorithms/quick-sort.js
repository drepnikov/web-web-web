// Реализовать быструю сортировку
function quickSort(arr) {
  if (arr < 2) {
    return arr;
  } else {
    // Лучше брать рандомный элемент (я беру серединный), а не первый
    // Первый плохо, потому-что если массив уже отсортирован, стек вызовов будет глубоким из-за того что в глубь будет одти только с одной стороны - с правой)
    const pivotIndex = Math.floor((arr.length - 1) / 2);
    const pivot = arr[pivotIndex];

    const less = [];
    const greater = [];

    for (let [index, n] of arr.entries()) {
      // пропускаем текущую опору
      if (index === pivotIndex) continue;

      n > pivot ? greater.push(n) : less.push(n);
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

console.log(quickSort([1, 213, 3, 5, 2, 8, 7])); // [1, 2, 3, 5, 7, 8, 213]
