const currentPage = window.location.pathname.split('/').pop().split('.html').shift();

window.onload = async () => {
    addNav();
    await setHead();
    await addBody();
    await colorNav();
    await animateSelectedPage();
    document.body.style.display = "block";
}

function setHead() {
    document.head.insertAdjacentHTML('afterbegin', `
        <title>${currentPage.charAt(0).toUpperCase()}${currentPage.slice(1)}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    `);
}

function addBody() {
    document.body.insertAdjacentHTML('beforeend', `
        <img src="${currentPage != 'home' ? '../' : './'}images/nyan-cat.gif" id="nyancat" />
        `);
}

function addNav() {
    let nav = ` 
        <nav>
            <ul>
                <li class="home"><a>Home</a></li>
                <li id="red"><a>Red</a></li>
                <li id="orange"><a>Orange</a></li>
                <li id="yellow"><a>Yellow</a></li>
                <li id="green"><a>Green</a></li>
                <li id="blue"><a>Blue</a></li>
                <li id="purple"><a>Purple</a></li>
            </ul>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', nav);
}

function colorNav() {
    document.querySelectorAll("li").forEach((element) => {
        element.style.color = element.id;
        element.style.setProperty('--color', element.id);
        element.children[0].href = `./${currentPage != 'home' ? '' : 'color-pages/'}${element.id}.html`;
    });
    document.querySelector('.home').children[0].href = currentPage != 'home' ? '../home.html' : './home.html';
}

function animateSelectedPage() {
    currentPage != 'home' && document.querySelector(`#${currentPage}`).classList.add(currentPage);
    document.querySelector(`.${currentPage}`).children[0].classList.add('selectedClass');
    document.body.style.setProperty('--background', currentPage);
}