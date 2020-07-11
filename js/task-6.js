let input = 0;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  const currentNumber = Number(input);
  if (Number.isNaN(currentNumber)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(currentNumber);
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

console.log(`Общая сумма чисел равна ${total}`);
