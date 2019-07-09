/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

var checkSpam = function(source, example){
  if(arguments.length < 2 || arguments.length > 2){
    throw new Error('function must include 2 arguments');
  };
  if(typeof source !== 'string' || typeof example !== 'string'){
    throw new Error ('argument must be a strings');
  };

  return source.toLowerCase().indexOf(example.toLowerCase()) > 0 ? true : false;

};

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
