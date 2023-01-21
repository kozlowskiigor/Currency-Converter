{
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

  // const usdToEur = 0.99190;
  // const usdToCzk = 24.33380;
  // const usdToGbp = 0.86147;
  // const gbpToEur = 1.15214;
  // const gbpToCzk = 28.26830;
  // const czkToEur = 0.04076;

  const calculateResult = (inputCurrency, outputCurrency, amount) => {
    switch (inputCurrency) {
      case pln.value:
        switch (outputCurrency) {
          case pln.value: return +amount;
          case eur.value: return amount * plnToEur;
          case czk.value: return amount * plnToCzk;
          case usd.value: return amount * plnToUsd;
          case gbp.value: return amount * plnToGbp;
        }
        break;
      case usd.value:
        switch (outputCurrency) {
          case usd.value: return +amount;
          case pln.value: return amount / plnToUsd;
          case eur.value: return amount * plnToEur / plnToUsd;
          case czk.value: return amount * plnToCzk / plnToUsd;
          case gbp.value: return amount * plnToGbp / plnToUsd;
        }
        break;
      case gbp.value:
        switch (outputCurrency) {
          case gbp.value: return +amount;
          case pln.value: return amount / plnToGbp;
          case eur.value: return amount * plnToEur / plnToGbp;
          case czk.value: return amount * plnToCzk / plnToGbp;
          case usd.value: return amount * plnToUsd / plnToGbp;
        }
        break;
      case czk.value:
        switch (outputCurrency) {
          case czk.value: return +amount;
          case pln.value: return amount / plnToCzk;
          case eur.value: return amount * plnToEur / plnToCzk;
          case gbp.value: return amount * plnToGbp / plnToCzk;
          case usd.value: return amount * plnToUsd / plnToCzk;
        }
        break;
      case eur.value:
        switch (outputCurrency) {
          case eur.value: return +amount;
          case pln.value: return amount / plnToEur;
          case czk.value: return amount * plnToCzk / plnToEur;
          case gbp.value: return amount * plnToGbp / plnToEur;
          case usd.value: return amount * plnToEur / plnToEur;
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
};