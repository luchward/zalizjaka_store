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
	for (key in lst) {
		const opt = document.createElement('option');
		opt.setAttribute('value', key);
		opt.textContent = key;
		slctFrom.appendChild(opt);
	}
	for (key in lst) {
		const opt = document.createElement('option');
		opt.setAttribute('value', key);
		opt.textContent = key;
		slctTo.appendChild(opt);
	}
}
/*function addSection() {
	const sect = document.querySelector('header');
	//const extraNew = document.createElement('div');
	//sect.setAttribute('id', 'extra');
	//sect.appendChild(extraNew);
	const title = document.createElement('h2');
	title.textContent = 'WOW! You have found extra posibilites of the site!';
	sect.appendChild(title);
	const currencyConverter = document.createElement('div');
	currencyConverter.setAttribute('id', 'currencyConverter');
	sect.appendChild(currencyConverter);
	const subtitle = document.createElement('h3');
	subtitle.textContent = 'Currency converter';
	currencyConverter.appendChild(subtitle);
	const currency-form = document.createElement('form');
	currencyConverter.appendChils(currency-form);
	const part-result = document.createElement('div');
	part-result.setAttribute('class', 'part');
	currencyConverter.appendChild(part-result);
	const part-from = document.createElement('div');
	part-from.setAttribute('class', 'part');
	currency-form.appendChild(part-from);
	let para = document.createElement('p');
	para.textContent = 'I need to exchange';
	part-from.appendChild(para);
	
	extra.setAttribute('id', 'extra');
	const slct = document.querySelector('select[name=currency]');
	for (key in lst) {
		const opt = document.createElement('option');
		opt.setAttribute('value', key);
		opt.textContent = key;
		slct.appendChild(opt);
	}*/