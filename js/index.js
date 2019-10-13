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

function arguments() {
    const currencyFrom = document.querySelector('.currency-form select[name=currencyFrom]').value;
    const currencyTo = document.querySelector('.currency-form select[name=currencyTo]').value;
    const quantity = document.querySelector('.currency-form input[name=quantity]').value;
    const line = 'https://api.exchangerate-api.com/v4/latest/' + currencyFrom;
    fetch(line)
        .then( response => response.json() )
        .then( rates => {
            document.querySelector('rates.UAH').innerText = rate;
        } );
    result.value = eval('quantity' * 'rate');
}

/*function arguments() {
    const currencyFrom = document.querySelector('.currency-form select[name=currencyFrom]').value;
    const currencyTo = document.querySelector('.currency-form select[name=currencyTo]').value;
    const quantity = document.querySelector('.currency-form input[name=quantity]').value;
    const line = 'https://api.exchangerate-api.com/v4/latest/' + currencyFrom;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('rates.currencyTo').innerText = rate;
        }
    }
    xhr.open('GET', 'line', true);
    xhr.send();
}*/