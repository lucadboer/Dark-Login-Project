const btn_submit = document.querySelector('.btn_submit')

btn_submit.addEventListener('click', load_page)

function load_page(event) {
    event.preventDefault();
    window.location = 'index.html'
}