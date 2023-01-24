const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const inputCurrencyElement = document.querySelector(".js-inputCurrency");
const outputCurrencyElement = document.querySelector(".js-outputCurrency");
const resultElement = document.querySelector(".js-result");

const pln = {
  short: "PLN",
  value: "1",
  name: "Polski złoty",
};

const gbp = {
  short: "GBP",
  value: "5,43913",
  name: "Polski złoty",
};

const usd = {
  short: "USD",
  value: "4,68485",
  name: "Dolar amerykański",
};

const czk = {
  short: "CZK",
  value: "0,19224",
  name: "Korona czeska",
};

const eur = {
  short: "EUR",
  value: "4,71790",
  name: "Euro",
};

const plnToGbp = 0.18385;
const plnToUsd = 0.21345;
const plnToCzk = 5.20183;
const plnToEur = 0.21195;

const calculateResult = (inputCurrency, outputCurrency, amount) => {
  switch (inputCurrency) {
    case pln.short:
      switch (outputCurrency) {
        case pln.short: return +amount;
        case eur.short: return amount * plnToEur;
        case czk.short: return amount * plnToCzk;
        case usd.short: return amount * plnToUsd;
        case gbp.short: return amount * plnToGbp;
      }
      break;
    case usd.short:
      switch (outputCurrency) {
        case usd.short: return +amount;
        case pln.short: return amount / plnToUsd;
        case eur.short: return amount * plnToEur / plnToUsd;
        case czk.short: return amount * plnToCzk / plnToUsd;
        case gbp.short: return amount * plnToGbp / plnToUsd;
      }
      break;
    case gbp.short:
      switch (outputCurrency) {
        case gbp.short: return +amount;
        case pln.short: return amount / plnToGbp;
        case eur.short: return amount * plnToEur / plnToGbp;
        case czk.short: return amount * plnToCzk / plnToGbp;
        case usd.short: return amount * plnToUsd / plnToGbp;
      }
      break;
    case czk.short:
      switch (outputCurrency) {
        case czk.short: return +amount;
        case pln.short: return amount / plnToCzk;
        case eur.short: return amount * plnToEur / plnToCzk;
        case gbp.short: return amount * plnToGbp / plnToCzk;
        case usd.short: return amount * plnToUsd / plnToCzk;
      }
      break;
    case eur.short:
      switch (outputCurrency) {
        case eur.short: return +amount;
        case pln.short: return amount / plnToEur;
        case czk.short: return amount * plnToCzk / plnToEur;
        case gbp.short: return amount * plnToGbp / plnToEur;
        case usd.short: return amount * plnToEur / plnToEur;
      }
      break;
  };
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const inputCurrency = inputCurrencyElement.short;
  const outputCurrency = outputCurrencyElement.short;
  const amount = amountElement.short;

  const result = calculateResult(inputCurrency, outputCurrency, amount);

  resultElement.innerText = `${result} ${outputCurrency}`;
};
formElement.addEventListener("submit", onFormSubmit)