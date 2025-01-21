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
const navInputTrigger = document.getElementById("heroInput").firstElementChild

//intersection observer
const navIntersectionOptions = {
    root: null,
    threshold: 1.0
}

let navIntersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('item enters the screen!')
            // observer.unobserve(navInputTrigger)
        }
    })
}, navIntersectionOptions)

//observe the input element
navIntersectionObserver.observe(navInputTrigger)
