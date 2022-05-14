//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

let str = "Hello6@";
let counter = 0;
function validation(str) {
  if (str.trim() == "")
    console.log('String "', str, '" is empty. Please, enter your string.');
  else {
    if (str.length < 5)
      console.log(
        'String "',
        str,
        '" is too short. The string must contain at least 5 symbols.'
      );
    else {
      counter++;
    }
    if (str.length > 64)
      console.log(
        'String "',
        str,
        '" is too long. The string must contain no more than 64 symbols.'
      );
    else {
      counter++;
    }
    if (!/[0-9]+/.test(str))
      console.log(
        'String "',
        str,
        '" doesnt contain numbers. The string must contain at least 1 number.'
      );
    else {
      counter++;
    }
    if (!/[a-zA-Zа-яА-Я]+/.test(str))
      console.log(
        'String "',
        str,
        '" doesnt contain letters. The string must contain letters.'
      );
    else {
      counter++;
    }
    if (!/[A-ZА-Я]+/.test(str))
      console.log(
        'String "',
        str,
        '" doesnt contain uppercase letters. The string must contain at least 1 uppercase letter.'
      );
    else {
      counter++;
    }
    if (!str.includes("@"))
      console.log(
        'String "',
        str,
        '" doesnt contain @. The string must contain at least 1 @-symbol.'
      );
    else {
      counter++;
    }
  }
  if (counter === 6) {
    console.log("Validation passed!!!");
  }
}
validation(str);
