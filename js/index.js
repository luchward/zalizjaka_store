document.getElementById('ref')
    .addEventListener('click', addSection);

function addSection () {
    const sect = document.getElementById('extra');
    const hat = document.createElement('h3');
    hat.textContent = 'WOW! You have found extra capabilities of the site!';
    sect.appendChild(hat);
    sect.setAttribute('class', 'highlight');
}
