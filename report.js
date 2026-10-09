const {
  grades,
  calculateAverage,
  findTopStudent,
  filterFailed,
  addLetterGrade
} = require("./main");

const PASS_SCORE = 60;

console.log("=== Анализ успеваемости ===");
console.log("1. Средний балл группы:", calculateAverage(grades).toFixed(2));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников:", filterFailed(grades, PASS_SCORE));
console.log("4. Итоговый массив с буквенными оценками:");
console.table(addLetterGrade(grades));