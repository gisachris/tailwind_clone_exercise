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
        navigationBar.classList.add("sticky", "top-2", "z-30", "flex", "justify-between", "mx-auto", "bg-fire-light-blue", "rounded-b-3xl", "pb-2");
        navigationBar.classList.remove("absolute", "top-4");
    } else {
        // Scrolling up
        navigationBar.classList.add("absolute", "top-4", "min-w-full");
        navigationBar.classList.remove("sticky", "top-2", "bg-fire-light-blue", "rounded-b-3xl", "pb-2");
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
