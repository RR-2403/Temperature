const tempInput = document.getElementById("tempInput");
const tofarenheit = document.getElementById("tofarenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const button = document.querySelector("button");

button.addEventListener("click", convertTemp);

function convertTemp() {
  if (tofarenheit.checked) {
    const celsius = parseFloat(tempInput.value);
    const fahrenheit = (celsius * 9) / 5 + 32;
    result.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
  } else if (toCelsius.checked) {
    const fahrenheit = parseFloat(tempInput.value);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    result.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
  } else {
    result.textContent = `Please select an unit.`;
  }
}
