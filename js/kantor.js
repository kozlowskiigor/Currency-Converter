const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const inputCurrencyElement = document.querySelector(".js-inputCurrency");
const outputCurrencyElement = document.querySelector(".js-outputCurrency");
const resultElement = document.querySelector(".js-result");

const pln = {
  short: "PLN",
  value: 1,
  name: "Polski złoty",
};

const gbp = {
  short: "GBP",
  value: 5.43913,
  name: "Polski złoty",
};

const usd = {
  short: "USD",
  value: 4.68485,
  name: "Dolar amerykański",
};

const czk = {
  short: "CZK",
  value: 0.19224,
  name: "Korona czeska",
};

const eur = {
  short: "EUR",
  value: 4.71790,
  name: "Euro",
};

const calculateResult = (inputCurrency, outputCurrency, amount) => {
  switch (inputCurrency) {
    case pln.short:
      switch (outputCurrency) {
        case pln.short: return +amount;
        case eur.short: return amount / eur.value;
        case czk.short: return amount / czk.value;
        case usd.short: return amount / usd.value;
        case gbp.short: return amount / gbp.value;
      }
      break;
      case gbp.short:
      switch (outputCurrency) {
        case gbp.short: return +amount;
        case pln.short: return amount * gbp.value;
        case eur.short: return amount * gbp.value / eur.value;
        case czk.short: return amount * gbp.value / czk.value;
        case usd.short: return amount * gbp.value / usd.value;
      }
      break;
    case usd.short:
      switch (outputCurrency) {
        case usd.short: return +amount;
        case pln.short: return amount * usd.value;
        case eur.short: return amount * usd.value / eur.value;
        case czk.short: return amount * usd.value / czk.value;
        case gbp.short: return amount * usd.value / gbp.value;
      }
      break;
    case czk.short:
      switch (outputCurrency) {
        case czk.short: return +amount;
        case pln.short: return amount * czk.value;
        case eur.short: return amount * czk.value / eur.value;
        case gbp.short: return amount * czk.value / gbp.value;
        case usd.short: return amount * czk.value / usd.value;
      }
      break;
    case eur.short:
      switch (outputCurrency) {
        case eur.short: return +amount;
        case pln.short: return amount * eur.value;
        case czk.short: return amount * eur.value / czk.value;
        case gbp.short: return amount * eur.value / gbp.value;
        case usd.short: return amount * eur.value / usd.value;
      }
      break;
  };
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const inputCurrency = inputCurrencyElement.value;
  const outputCurrency = outputCurrencyElement.value;
  const amount = amountElement.value;

  const result = calculateResult(inputCurrency, outputCurrency, amount);

  resultElement.innerText = `${result.toFixed(2)} ${outputCurrency}`;
};
formElement.addEventListener("submit", onFormSubmit)