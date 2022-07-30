// Сколько дней до потепления
function howMuchDays(days) {
  const stack = [];
  const result = [];

  for (let i = days.length - 1; i >= 0; i--) {
    const currentTemperature = days[i];

    while (stack.length && stack[0].temperature <= currentTemperature) {
      stack.shift();
    }

    if (stack.length) {
      result.unshift(stack[0].index - i);
    } else {
      result.unshift(0);
    }

    stack.unshift({ temperature: currentTemperature, index: i });
  }

  return result;
}

console.log(howMuchDays([13, 12, 15, 11, 9, 12, 16])); // [2, 1, 4, 2, 1, 1, 0]
