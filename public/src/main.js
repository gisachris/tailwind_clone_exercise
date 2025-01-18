//hover effect on navigation
const navBar = document.getElementById('navList')

navBar.addEventListener('click', (e) => {
    let allLinks = navBar.querySelectorAll("li")

    allLinks.forEach(link => {
        if (link.classList.contains("navActive")) link.classList.remove("navActive")
    })

    let currLink = e.target.parentElement
    currLink.classList.add('navActive')
})
