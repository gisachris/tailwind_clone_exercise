const navBar = document.getElementById('navList');
let activeLink = navBar.querySelector('.navActive');

navBar.addEventListener('click', (e) => {
    let currLink = e.target.closest('.navHover');
    if (!currLink || currLink === activeLink) return;

    if (activeLink) activeLink.classList.remove('navActive');
    currLink.classList.add('navActive');
    activeLink = currLink;
});
