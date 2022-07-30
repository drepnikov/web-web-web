// Валидны лим открытые и закрытие скобки
function validParentheses(str) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const needToCloseStack = [];

  for (let char of str) {
    if (char in map) {
      needToCloseStack.push(map[char]);
    } else {
      const currentNeedToClose = needToCloseStack.pop();

      if (currentNeedToClose !== char) return false;
    }
  }

  return needToCloseStack.length ? false : true;
}

console.log(validParentheses("()")); // true
console.log(validParentheses("()[]{}")); // true
console.log(validParentheses("(]")); // false
console.log(validParentheses("()[}{}")); // false
