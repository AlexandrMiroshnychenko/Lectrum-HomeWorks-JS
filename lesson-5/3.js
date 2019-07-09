/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
var truncate = function (string, maxLength){
  if(arguments.length < 2 || arguments.length > 2){
    throw new Error('function must include 2 arguments');
  };

  if(typeof arguments[0] !== 'string' || typeof arguments[1] !== 'number'){
    throw new Error('arguments should be string and number');
  };

  if(string.length > maxLength){
    var shortString = string.slice(0, maxLength - 3);
    string = shortString + '...';
  };

  return string;

};


truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;
