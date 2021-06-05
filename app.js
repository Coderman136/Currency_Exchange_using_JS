let currency = document.querySelector(".currency");
let convertedCurrency = document.querySelector(".convertedCurrency");
let inputValue = document.querySelector("#value1");
let outputValue = document.querySelector("#value2");
const swap= document.querySelector(".currencySwap");
// cons axios = require("axios");


const convert = async() => {
 let cur = currency.value;
 let convertCur = convertedCurrency.value;
 const current = await axios.get(`https://v6.exchangerate-api.com/v6/dc27a039e95de7278e5331e6/latest/${cur}`);
 const conversionCur = current.data.conversion_rates[convertCur];
 let value =  inputValue.value * conversionCur;
 outputValue.value =  value.toString();
 console.log(outputValue.value);
}

const swapped = ()=> {
 [currency.value, convertedCurrency.value ] = [convertedCurrency.value,currency.value ];
 convert();
}
swap.addEventListener("click", swapped);






currency.addEventListener("change", convert);
convertedCurrency.addEventListener("change", convert);
inputValue.addEventListener("input", convert);
outputValue.addEventListener("input", convert);

