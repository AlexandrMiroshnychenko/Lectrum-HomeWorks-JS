/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение
const f = function(num){

  if (typeof num !== "number"){
    throw new Error('parameter type is not a Number');
  } else if (num < 1 || num > 7){
    throw new Error('parameter should be in the range of 1 to 7');
  };

  const check = function(num){
    switch(num){
      case 1:
        return 'Воскресенье';
        break;

      case 2:
        return 'Понедельник';
        break;

      case 3:
        return 'Вторник';
        break;

      case 4:
        return 'Среда';
        break;

      case 5:
        return 'Четверг';
        break;

      case 6:
        return 'Пятница';
        break;

      case 7:
        return 'Суббота';
        break;
    }
  }


  return check(num);


};

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

export { f };
/* не удалять */
