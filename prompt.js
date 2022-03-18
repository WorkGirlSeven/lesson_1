function getNumberSystem() {
  const value1 = Number(prompt('введите число', ''));
  if (isNaN(value1)) {
    console.log('Некорректный ввод!');
    return;
  }
  const value2 = Number(prompt('введите число', ''));
  if (isNaN(value2) || value2 <= 1 || value2 >= 10) {
    console.log('Некорректный ввод!');
  } else {
    const result = value1.toString(value2);
    console.log(result);
  }
}

getNumberSystem()


function calculation() {
  const value1 = Number(prompt('введите число', ''));
  if (isNaN(value1)) {
    console.log('Некорректный ввод!');
    return;
  }
  const value2 = Number(prompt('введите число', ''));
  const sum = value1 + value2;
  const division = value1 / value2;
  if (isNaN(value2) || value2 === 0) {
    console.log('Некорректный ввод!');
    
  } else {
    console.log(`Ответ ${sum}, ${division}.`);
  }
}

calculation()




