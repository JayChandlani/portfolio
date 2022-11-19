let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {

        nav.classList.add('header-scrolled');
    } else {
        nav.classList.remove('header-scrolled');

    }
}

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(a => {
    a.addEventListener('click', () => {
        navCollapse.classList.remove('show')
    })
});


let li = document.querySelectorAll('.nav-link');
let sec = document.querySelectorAll('section')
    function activeMenu() {
        let len = sec.length;
        while (--len&&window.scrollY +500 <sec[len].offsetTop) {}
        li.forEach(ltx => ltx.classList.remove('active'));
        li[len].classList.add('active');}
        activeMenu();
        window.addEventListener('scroll',activeMenu);
