"use strict";

// const formatString = function (string) {
//   if (string.length > 40) {
//     string = string.substr(0, 40);
//     return `${string}...`;
//   }
//   return string;
// };

const formatString = function (string) {
  return string.length > 40 ? string.substr(0, 40) + "..." : string;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
