// toggle nav
const showHideNav = () => {
    document.getElementById("nav-toggle").classList.toggle('show-hide');
    console.log("hamburger btn");
}
document.getElementById("hamburger").onclick = showHideNav;
