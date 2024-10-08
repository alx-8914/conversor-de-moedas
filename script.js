const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

    // Fazendo a requisição com fetch e await
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json());

    // Corrigindo as propriedades dos dados retornados
    const dolarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const libraToday = data.GBPBRL.high;
    const bitcoinToday = data.BTCBRL.high;

    console.log(data);

    // Aqui você pode adicionar lógica para converter os valores usando as taxas obtidas.
};

convertValues();




if (currencySelect.value == "Dolar") { // Se o select estiver selecionado o valor de Dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}
if (currencySelect.value == "Euro") {  // Se o select estiver selecionado o valor de Euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
}

if (currencySelect.value == "Libra") {  // Se o select estiver selecionado o valor de Libra, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("gbp", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
}

if (currencySelect.value == "bitcoin")  // Se o select estiver selecionado o valor de Bitcoin, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("btc", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)



function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/Dólar.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

}

convertValues()





currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)