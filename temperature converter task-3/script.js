document.addEventListener("DOMContentLoaded", function () {
  const temperatureInput = document.getElementById("temperatureInput");
  const unitSelectorFrom = document.getElementById("unitSelectorFrom");
  const unitSelectorTo = document.getElementById("unitSelectorTo");
  const convertButton = document.getElementById("convertButton");
  const result = document.getElementById("result");

  convertButton.addEventListener("click", function () {
    const inputValue = parseFloat(temperatureInput.value);
    const tempUnit = unitSelectorFrom.value;
    const desiredUnit = unitSelectorTo.value;

    if (isNaN(inputValue)) {
      result.textContent = "Please enter a valid number.";
      result.style.color = "red";
      return;
    }

    let convertedValue;
    let convertedUnit;

    if (tempUnit === "celsius") {
      if (desiredUnit === "fahrenheit") {
        convertedValue = inputValue * (9 / 5) + 32;
        convertedUnit = "Fahrenheit";
      } else if (desiredUnit === "kelvin") {
        convertedValue = inputValue + 273.15;
        convertedUnit = "Kelvin";
      } else {
        convertedValue = inputValue;
        convertedUnit = "Celsius";
      }
    } else if (tempUnit === "fahrenheit") {
      if (desiredUnit === "celsius") {
        convertedValue = (inputValue - 32) * (5 / 9);
        convertedUnit = "Celsius";
      } else if (desiredUnit === "kelvin") {
        convertedValue = (inputValue - 32) * (5 / 9) + 273.15;
        convertedUnit = "Kelvin";
      } else {
        convertedValue = inputValue;
        convertedUnit = "Fahrenheit";
      }
    } else if (tempUnit === "kelvin") {
      if (desiredUnit === "fahrenheit") {
        convertedValue = (inputValue - 273.15) * (9 / 5) + 32;
        convertedUnit = "Fahrenheit";
      } else if (desiredUnit === "celsius") {
        convertedValue = inputValue - 273.15;
        convertedUnit = "Celsius";
      } else {
        convertedValue = inputValue;
        convertedUnit = "Kelvin";
      }
    }

    result.textContent = `${inputValue} ${tempUnit} is ${convertedValue.toFixed(
      2
    )} ${convertedUnit}`;
    result.style.color = "black";
  });
});
