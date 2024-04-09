// Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");

    const navigationLinks = document.querySelectorAll('nav a');
    navigationLinks.forEach(n => n.addEventListener("click", linkAction))
}
// End Navigation

function linkAction()
{
    toggleMenu();
}

