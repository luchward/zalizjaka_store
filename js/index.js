document.querySelector('header nav h3')
    .addEventListener('click', addSection);

function addSection () {
    const sect = document.createElement('div');
    const hat = document.createElement('h3');
    hat.textContent = 'WOW! You have found extra capabilities of the site!';
    sect.appendChild(hat);
}
