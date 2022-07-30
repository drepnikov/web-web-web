//  Проверить строку на то что она палиндром. Знаки припенания - игнорировать, и нужно использовать регулярку.
function isPalindromeString(str) {
  const cleaned = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Способы проверки на палиндром смотри в is-palindrome-digit. Возьмем самый простой
  return cleaned === [...cleaned].reverse().join("");
}

console.log(isPalindromeString("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeString("race a car")); // false
