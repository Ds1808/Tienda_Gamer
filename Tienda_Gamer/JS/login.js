//Asignar los datos del formulario a una variable
let loginForm = document.querySelector('#loginForm')

//Asignar un evento para enviar una información
loginForm.addEventListener('submit', (e)=> {
    e.preventDefault()

    //Asignaremos los datos que ingresemos en los campos a las variables
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    //Obtenemos los datos de la tabla para validar el inicio de sesión
    let Users = JSON.parse(localStorage.getItem('users')) || []

    //Buscaremos y comprobamos si el correo y la clave se encuentran regsitrados en la BD
    let validUser = Users.find(user => user.email === email && user.password === password)

    //
    if(!validUser) {
        Swal.fire({
            icon: 'error',
            title: 'Error de datos',
            text: 'El usuario y/o clave son incorrectos, intentalo de nuevo'
        })
        return
    }

    Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión Exitoso',
        text: `Bienvenido de nuevo ${validUser.name}`
    })
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href = 'index.html'
})