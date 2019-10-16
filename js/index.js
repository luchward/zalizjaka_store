'use strict';
document.getElementById('ref')
    .addEventListener('click', addSection);

function addSection() {
	getRates();
	document.querySelector('#extra').style.display = 'flex';
}

document.getElementById('close')
    .addEventListener('click', closeSection);

function closeSection() {
	document.querySelector('#extra').style.display = 'none';
}

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

function getRates() {
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
	const slctFrom = document.querySelector('#extra #currencyConverter .part select[name=currencyFrom]');
	const slctTo = document.querySelector('#extra #currencyConverter .part select[name=currencyTo]');
	for (let key in lst) {
		const opt = document.createElement('option');
		opt.setAttribute('value', key);
		opt.textContent = key;
		slctFrom.appendChild(opt);
	}
	for (let key in lst) {
		const opt = document.createElement('option');
		opt.setAttribute('value', key);
		opt.textContent = key;
		slctTo.appendChild(opt);
	}
}
