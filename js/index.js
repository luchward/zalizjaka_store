/*document.getElementById('ref')
    .addEventListener('click', addSection);

function addSection () {
    const sect = document.getElementById('extra');
    let title = document.createElement('h3');
    let headline = document.createElement('h4');
    let para = document.createElement('p');
    let span = document.createElement('span');
    let form = document.createElement('form');
    let input = document.createElement('input');
    let select = document.createElement('select');
    let option = document.createElement('option');
    let type;
    hat.textContent = 'WOW! You have found extra capabilities of the site!';
    sect.appendChild(hat);
    sect.setAttribute('class', 'highlight');

    const currencyConverter = document.createElement('div');
    currencyConverter.appendChild('h4');

}*/
let rate;
const quantity = document.querySelector('#quantity');
const result = document.querySelector('#result');
document.querySelector('.currency-form input[type=submit]')
    .addEventListener('click', arguments);

function arguments(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const currencyFrom = document.querySelector('.currency-form select[name=currencyFrom]').value;
    const currencyTo = document.querySelector('.currency-form select[name=currencyTo]').value;
    const quantity = document.querySelector('.currency-form input[name=quantity]').value;
    const url = 'https://api.exchangerate-api.com/v4/latest/' + currencyFrom;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let currencyRates = JSON.parse(xhr.responseText);
            rate = quantity * currencyRates.rates[currencyTo];
            result.value =  rate.toFixed(2);
        }
    }
    xhr.open('POST', url, true);
    xhr.send();
}
