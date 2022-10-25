"use strict";
(function () {
  function funcWithoutParam() {
    const value = "From funcWithoutParam";
    return value;
  }

  function funcWithParam(value2) {
    return value2;
  }

  const arrowFunctionWithoutParam = () => {
    const value3 = "From arrowFunctionWithoutParam";
    return value3;
  }

  const arrowFunctionWithParam = (value4) => {
    return value4;
  }

  const arrowFunctionWithParam2 = value5 => value5;


  display(funcWithoutParam());
  display(funcWithParam("From funcWithParam"));
  display(arrowFunctionWithoutParam());
  display(arrowFunctionWithParam("From arrowFunctionWithParam"));
  display(arrowFunctionWithParam2("From arrowFunctionWithParam2"));

})();
