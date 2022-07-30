/*
    Самый выгодный день для покупок (метод скользящего окна) (какой самый большой профит?) (отрицательный профит не рассматриваем, возвращаем 0)

    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ :on:
 */
function bestTimeToBuy(arr) {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < arr.length) {
    if (arr[l] < arr[r]) {
      maxProfit = Math.max(maxProfit, arr[r] - arr[l]);
    } else {
      l = r;
    }

    r++;
  }

  return maxProfit;
}

console.log(bestTimeToBuy([7, 2, 3, 1, 6, 4])); // 5 (6 - 1)
console.log(bestTimeToBuy([4, 2, 3, 9])); // 7 (9 - 2)
console.log(bestTimeToBuy([7, 6, 4, 3, 1])); // 0
