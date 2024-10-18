// Llamaremos el id del formulario del registro
let signupForm = document.querySelector("#signupForm");

signupForm.addEventListener('submit' , (e) => {
    //Ayuda a prevenir que la pagina se recargur de manera automatica
    e.preventDefault()

    //Obtener los valores del formulario
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    let Users = JSON.parse(localStorage.getItem('users')) || []
    //Find metodo de buscar en el local si el correo ya existe 
    let isUserRegistered = Users.find(user => user.email === email)

    //Si el correo ya existe, que muestre que ya se encuentra en uso
    if (isUserRegistered) {
        swal.fire ({
            icon: 'error',
            title: 'Error de datos',
            text: 'el correo ya se encuentra en uso, usa otro diferente'
        })
        return
    }

    // Almacenamos los datos del usuario
    Users.push({name, email, password})
    //setItem = Asigna la información
    //convertimos los datos del nuevo usuario de string a object
    localStorage.setItem('users' , JSON.stringify(Users))
    //Mostrar el mensaje de registro exitoso
    swal.fire ({
        icon: 'success',
        title: 'Registro Existoso',
        text: 'Tu registro se ha realizado con éxito'
    }).then(() => {
        window.location.href = 'login.html'
    })
})