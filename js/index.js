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

document.querySelector('.currency-form input[type=submit]')
    .addEventListener('click', currencyExchange);

function currencyExchange(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const currencyFrom = document.querySelector('.currency-form select[name=currencyFrom]').value;
    const currencyTo = document.querySelector('.currency-form select[name=currencyTo]').value;
    const quantity = document.querySelector('.currency-form input[name=quantity]').value;
    const url = 'https://api.exchangerate-api.com/v4/latest/' + currencyFrom;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const currencyRates = JSON.parse(xhr.responseText);
            const resultRaw = quantity * currencyRates.rates[currencyTo];
            result.value =  resultRaw.toFixed(2);
        }
    }
    xhr.open('POST', url, true);
    xhr.send();
}

function getRates(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const url = 'https://api.exchangerate-api.com/v4/latest/USD';
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const currencyRates = JSON.parse(xhr.responseText).rates;
			buidCurrencyList(currencyRates);
        }
    }
    xhr.open('POST', url, true);
    xhr.send();
}

function buidCurrencyList(lst) {
	const slct = document.querySelector('select[name=currency]');
	for (key in lst) {
		const opt = document.createElement('option');
		opt.setAttribute('value', key);
		opt.textContent = key;
		slct.appendChild(opt);
	}
}
