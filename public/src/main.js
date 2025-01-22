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
const navigationBar = document.getElementById("nav")

function navBarMover(direction, cssString) {
    if (direction === 'top') {

    } else {

    }
}

//intersection observer
const navIntersectionOptions = {
    root: null,
    threshold: 0
}

let navIntersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.boundingClientRect.top > 0) { //moving down
                // navBarMover('bottom', 'relative flex justify-between mt-10')
            } else if (entry.boundingClientRect.top < 0) { //moving up
                // navBarMover('bottom', 'sticky flex justify-between mt-10')
            }
        }
    })
}, navIntersectionOptions)

//observe the input element
navIntersectionObserver.observe(navInputTrigger)
