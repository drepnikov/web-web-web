// Узнать угол между часовыми стрелками без минут
function clockAngle(h) {
  return (6 - Math.abs(6 - (h % 12))) * (360 / 12);
}

// Узнать угол между часовыми стрелками с минутами
function clockAngleWithMinutes(h) {}

console.log(clockAngle(5)); // 150
console.log(clockAngle(20)); // 120
