/*===== MENU SHOW =====*/
const showMenu = (toogleId, navId) => {
  const toggle = document.getElementById(toogleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu('nav-toggle', 'nav-menu');
/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    // remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.toggle('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));