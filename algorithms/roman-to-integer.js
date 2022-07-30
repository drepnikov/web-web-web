const romanToInt = (s) => {
  const values = [
    ["CM", 900],
    ["CD", 400],
    ["XC", 90],
    ["XL", 40],
    ["IX", 9],
    ["IV", 4],
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ];

  let str = s;
  let result = 0;

  for (let [key, value] of values) {
    while (str.includes(key)) {
      result += value;
      str = str.replace(key, "");
    }
  }

  return result;
};

console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("III")); // 3
