$(document).ready(function () {
  let inputNumber1 = 0;
  let inputNumber2 = 0;
  let operator = "";
  let result = 0;

  function calculate() {
    switch (operator) {
      case "+":
        result = inputNumber1 + inputNumber2;
        break;
      case "-":
        result = inputNumber1 - inputNumber2;
        break;
      case "*":
        result = inputNumber1 * inputNumber2;
        break;
      case "/":
        result = inputNumber1 / inputNumber2;
        break;
      default:
        result = 0;
    }

    $("#inputResult").val(result);
  }

  $("#buttonOne").click(function () {
    $("#inputNumber1").val($("#inputNumber1").val() + 1);
  });

  $("#buttonTwo").click(function () {
    $("#inputNumber1").val($("#inputNumber1").val() + 2);
  });

  $("#buttonPlus").click(function () {
    inputNumber2 = parseInt($("#inputNumber1").val());
    $("#inputNumber1").val("");
    operator = "+";
    calculate();
  });

  $("#buttonMinus").click(function () {
    inputNumber2 = parseInt($("#inputNumber1").val());
    $("#inputNumber1").val("");
    operator = "-";
    calculate();
  });

  $("#buttonMultiply").click(function () {
    inputNumber2 = parseInt($("#inputNumber1").val());
    $("#inputNumber1").val("");
    operator = "*";
    calculate();
  });

  $("#buttonDivide").click(function () {
    inputNumber2 = parseInt($("#inputNumber1").val());
    $("#inputNumber1").val("");
    operator = "/";
    calculate();
  });

  $("#buttonEqual").click(function () {
    inputNumber1 = parseInt($("#inputNumber1").val());
    $("#inputNumber1").val("");
    calculate();
  });
});