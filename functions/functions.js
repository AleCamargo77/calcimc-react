export function validDigits(text) {
  return text.replace(/[^0-9,]/g, "");
}

export function calcImc(weightInput, heightInput) {
  const imc = weightInput / (heightInput * heightInput);
  return imc.toFixed(1);
}
