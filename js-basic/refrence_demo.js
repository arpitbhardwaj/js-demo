"use strict";
(function () {
  const number = 1;
  const newNumber = number;

  display(number);
  display(newNumber);

  const person = {
    name: "Max"
  }

  //copy by reference
  const newPerson = person

  //copy by value (literal copy) (immutable copy)
  const newPerson2 = {
    ...person
  }

  person.name = "Jhon"

  display(person);
  display(newPerson);
  display(newPerson2);

})();
