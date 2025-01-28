const navBar = document.getElementById('navList');
let activeLink = navBar.querySelector('.navActive');

navBar.addEventListener('click', (e) => {
    let currLink = e.target.closest('.navHover');
    if (!currLink || currLink === activeLink) return;

    if (activeLink) activeLink.classList.remove('navActive');
    currLink.classList.add('navActive');
    activeLink = currLink;
});

//navigation bar sticky scroll
const navigationBar = document.getElementById("nav");
let lastScrollY = 0;

function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        navigationBar.classList.remove("absolute", "top-4");
        navigationBar.classList.add("sticky", "top-0", "z-30", "bg-fire-light-blue", "rounded-b-3xl", "pb-2");
        navigationBar.firstElementChild.classList.remove("hidden")
    } else if (currentScrollY < lastScrollY && currentScrollY <= 350) {
        // Scrolling up
        navigationBar.classList.remove("sticky", "top-0", "bg-fire-light-blue", "rounded-b-3xl", "pb-2");
        navigationBar.classList.add("absolute", "top-4");
        navigationBar.firstElementChild.classList.add("hidden")
    }

    lastScrollY = currentScrollY;
}

let isTicking = false;

window.addEventListener('scroll', () => {
    if (!isTicking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            isTicking = false;
        });
        isTicking = true;
    }
});
