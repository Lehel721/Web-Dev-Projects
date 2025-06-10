const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let fromDropdown = document.querySelector('#from');
let toDropdown = document.querySelector('#to');
let fromFlag = document.querySelector('.from .container img');
let toFlag = document.querySelector('.to .container img');
let btn=document.querySelector('form button');
let message=document.querySelector('.message')

for (let code in countryList) {

    let optionFrom = document.createElement('option');
    optionFrom.value = code;
    optionFrom.innerText = code;
    fromDropdown.appendChild(optionFrom);


    let optionTo = document.createElement('option');
    optionTo.value = code;
    optionTo.innerText = code;
    toDropdown.appendChild(optionTo);
}


fromDropdown.value = "USD";
toDropdown.value = "INR";


function updateFlag(dropdown, flagImg) {
    let currencyCode = dropdown.value;
    let countryCode = countryList[currencyCode];
    flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}


fromDropdown.addEventListener('change', function () {
    updateFlag(fromDropdown, fromFlag);
});
toDropdown.addEventListener('change', function () {
    updateFlag(toDropdown, toFlag);
});

updateFlag(fromDropdown, fromFlag);
updateFlag(toDropdown, toFlag);

btn.addEventListener('click', async (event) => {
    event.preventDefault();
    let amount = document.querySelector('.box').value;
    let from = fromDropdown.value.toLowerCase(); 
    let to = toDropdown.value.toLowerCase();     
    const newurl = `${url}/${from}.json`;

   
    let response = await fetch(newurl);
    let data = await response.json();

    let rate = data[from][to];
    let result = amount * rate;

    message.innerText=`${amount} ${fromDropdown.value} = ${result} ${toDropdown.value}`;
});