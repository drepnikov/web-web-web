// Реализовать треуголник поскаля, и получать его до определенного ряда
// Нужно обязательно посмиотреть как выглядит треугольник, например https://sprint-olympic.ru/uroki/matematika-uroki/93043-treygolnik-paskalia-formyla-svoistva-i-primenenie.html

function pascalTriangle(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    const row = [];

    for (let k = 0; k < i; k++) {
      if (k === 0 || k === i - 1) {
        row.push(1);
      } else {
        let lastRow = result[result.length - 1];
        let value = lastRow[k - 1] + lastRow[k];

        row.push(value);
      }
    }

    result.push(row);
  }

  return result;
}

console.log(pascalTriangle(5)); // [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]
