const btn_register = document.querySelector('.btn-register')

btn_register.addEventListener('click', load_page)

function load_page(event) {
    event.preventDefault();
    window.location = 'pages/registration.html'
}
