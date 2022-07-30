function duplicateCount(text) {
  const mapa = {};
  const lowerCasedText = text.toLowerCase();
  let counter = 0;

  for (let char of lowerCasedText) {
    if (mapa[char] === 1) {
      console.log(mapa, char, mapa[char]);
      mapa[char]++;
      counter++;
    } else {
      mapa[char] = 1;
    }
  }

  return counter;
}

console.log(duplicateCount("Indivisibilities")); //2
