const btn_submit = document.querySelector('.btn_submit')
const inputs = document.querySelectorAll('input')
let validate = Boolean

btn_submit.addEventListener('click', register)


function register() {

    inputs.forEach(element => {
        if (element.value.length == "") {
            validate = true
            return            
        } 
        else {
            validate = false
        }
    })

    if (validate === true) {
        alert('Preencha todos os campos')
    }
    
}