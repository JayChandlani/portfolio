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
    while (--len && window.scrollY + 500 < sec[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);

// Getting Data From Form And Saving to Google Sheets;
document.getElementById('formsub').onsubmit = (e) => {
    e.preventDefault();
    const toastLiveExample = document.getElementById('liveToast')
    let formdata = document.getElementById('formsub');
    let data = new FormData(formdata)
    const toast = new bootstrap.Toast(toastLiveExample);
    if (formdata[0].value) {
        document.getElementById('status_bg').classList.remove('change', 'valid')
        document.getElementById('status').innerText = "Pending"
        document.getElementById('innertext').innerText = "Sending, Please wait"
        toast.show();
        let request = new XMLHttpRequest();
        request.open("POST", "https://script.google.com/macros/s/AKfycbztXbkkuypw00TpFkRwKwb7sD_NYneKqEPLG95sD7KSCkrV2sm7qaodCIbWpn5R4y_7/exec");
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                document.getElementById('status_bg').classList.add('change')
                document.getElementById('status').innerText = "Successfull"
                document.getElementById('innertext').innerText = "Your message has been submitted"
                toast.show();
                formdata.reset();
            }
        }
        request.send(data);
    } else {
        document.getElementById('status_bg').classList.add('valid')
        document.getElementById('status').innerText = "Error"
        document.getElementById('innertext').innerText = "Please enter some thing"
        toast.show();
    }
}
