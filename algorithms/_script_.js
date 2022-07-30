/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const mapa = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const needToClose = [];

  for (let p of s) {
    if (p in mapa) {
      needToClose.push(mapa[p]);
    } else {
      const needed = needToClose.pop();

      if (needed !== p) return false;
    }
  }

  return needToClose.length ? false : true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
