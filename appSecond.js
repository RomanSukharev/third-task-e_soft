function isValid(s) {
  const stack = [];
  const brackets = {
      '(': ')',
      '[': ']',
      '{': '}',
  };

  for (let bracket of s) {
      if (brackets[bracket]) {
          // Если это открывающая скобка, добавляем её в стек
          stack.push(bracket);
      } else {
          // Если это закрывающая скобка
          const lastBracket = stack.pop();
          if (brackets[lastBracket] !== bracket) {
              // Если последняя открывающая скобка не соответствует текущей закрывающей
              return false;
          }
      }
  }

  // Если стек не пуст после обхода всех скобок, то в последовательности есть непарные скобки
  return stack.length === 0;
}

// Примеры использования:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
