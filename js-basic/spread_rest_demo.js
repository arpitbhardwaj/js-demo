"use strict";
(function () {
  const numbers = [1,2,3];
  const newNumbers = [...numbers, 4];

  display(numbers);
  display(newNumbers);

  const person = {
    name: "Max"
  }

  const newPerson = {
    ...person,
    age: 28
  }

  display(person);
  display(newPerson);

  const filter = (...args) => {
    return args.filter(el => el === 1);
  }

  display(filter(1,2,3));
})();
