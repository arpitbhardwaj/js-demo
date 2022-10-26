"use strict";
(function () {
  const numbers = [1,2,3];
  [num1,num2] = numbers;
  [,,num3] = numbers;

  display(num1);
  display(num3);

  const person = {
    name: "Max",
    age: 28
  }

  //{prop1} = person;
  //display(prop1)
})();
