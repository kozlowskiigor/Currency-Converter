{
  const formElement = document.querySelector(".js-form");
  const amountElement = document.querySelector(".js-amount");
  const inputCurrencyElement = document.querySelector(".js-inputCurrency");
  const outputCurrencyElement = document.querySelector(".js-outputCurrency");
  const resultElement = document.querySelector(".js-result");

  // const pln = {
  //   short: "PLN",
  //   value: "1",
  //   name: "Polski złoty",
  // };

  // const gbp = {
  //   short: "GBP",
  //   value: "5,43913",
  //   name: "Polski złoty",
  // };

  // const usd = {
  //   short: "USD",
  //   value: "4,68485",
  //   name: "Dolar amerykański",
  // };

  // const czk = {
  //   short: "CZK",
  //   value: "0,19224",
  //   name: "Korona czeska",
  // };

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
      case "PLN":
        if (outputCurrency === "PLN") return amount * 1;
        else if (outputCurrency === "EUR") return amount * plnToEur;
        else if (outputCurrency === "CZK") return amount * plnToCzk;
        else if (outputCurrency === "USD") return amount * plnToUsd;
        else if (outputCurrency === "GBP") return amount * plnToGbp;
        break;
      case "USD":
        if (outputCurrency === "USD") return amount * 1;
        else if (outputCurrency === "PLN") return amount / plnToUsd;
        else if (outputCurrency === "EUR") return amount * plnToEur / plnToUsd;
        else if (outputCurrency === "CZK") return amount * plnToCzk / plnToUsd;
        else if (outputCurrency === "GBP") return amount * plnToGbp / plnToUsd;
        break;
      case "GBP":
        if (outputCurrency === "GBP") return amount * 1;
        else if (outputCurrency === "PLN") return amount / plnToGbp;
        else if (outputCurrency === "EUR") return amount * plnToEur / plnToGbp;
        else if (outputCurrency === "CZK") return amount * plnToCzk / plnToGbp;
        else if (outputCurrency === "USD") return amount * plnToUsd / plnToGbp;
        break;
      case "CZK":
        if (outputCurrency === "CZK") return amount * 1;
        else if (outputCurrency === "PLN") return amount / plnToCzk;
        else if (outputCurrency === "EUR") return amount * plnToEur / plnToCzk;
        else if (outputCurrency === "GBP") return amount * plnToGbp / plnToCzk;
        else if (outputCurrency === "USD") return amount * plnToUsd / plnToCzk;
        break;
      case "EUR":
        if (outputCurrency === "EUR") return amount * 1;
        else if (outputCurrency === "PLN") return amount / plnToEur;
        else if (outputCurrency === "CZK") return amount * plnToCzk / plnToEur;
        else if (outputCurrency === "GBP") return amount * plnToGbp / plnToEur;
        else if (outputCurrency === "USD") return amount * plnToEur / plnToEur;
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