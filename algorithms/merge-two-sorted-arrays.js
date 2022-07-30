// Смёржить два отсортированных массива

// -- easy
function mergeSortedArrays(nums1, nums2) {
  let result = [];

  while (nums1[0] && nums2[0]) {
    if (nums1[0] < nums2[0]) {
      result.push(nums1.shift());
    } else {
      result.push(nums2.shift());
    }
  }

  if (nums1.length) {
    result = result.concat(nums1);
  }

  if (nums2.length) {
    result = result.concat(nums2);
  }

  return result;
}
console.log(mergeSortedArrays([1, 2, 5, 9], [3, 4, 5, 6, 9])); // [1,2,3,4,5,5,6,9,9]

// -- Без дополнительной переменной result, просто изменяя arr1
function mergeSortedArraysWithChangeArr1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[0]) {
      arr1.splice(i, 0, arr2.shift());
    }
  }

  if (arr2.length) {
    arr1.splice(arr1.length, 0, ...arr2);
  }

  return arr1;
}
console.log("mergeSortedArraysWithChangeArr1", mergeSortedArraysWithChangeArr1([1, 2, 5, 9], [3, 4, 5, 6, 9])); // [1,2,3,4,5,5,6,9,9]

/* -- hard
  Вам даны два массива целых чисел nums1 и nums2, отсортированные в неубывающем порядке, и два целых числа m и n, представляющие количество элементов в nums1 и nums2 соответственно.
  Объедините nums1 и nums2 в один массив, отсортированный в неубывающем порядке.
  Окончательный отсортированный массив не должен возвращаться функцией, а должен храниться внутри массива nums1.
  Чтобы приспособиться к этому, nums1 имеет длину m + n, где первые m элементов обозначают элементы, которые должны быть объединены,
  а последние n элементов устанавливаются равными 0 и должны игнорироваться. nums2 имеет длину n.

  https://leetcode.com/problems/merge-sorted-array/
  https://www.youtube.com/watch?v=P1Ic85RarKY&ab_channel=NeetCode
*/
function mergeSortedArraysExtended(nums1, m, nums2, n) {
  function myBadSolution() {
    let index = m;

    for (let n of nums2) {
      nums1[index++] = n;
    }

    nums1.sort((a, b) => a - b);

    return nums1;
  }

  return myBadSolution();
}
console.log(mergeSortedArraysExtended([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(mergeSortedArraysExtended([1], 1, [], 0)); // [1]
