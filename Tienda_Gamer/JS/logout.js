let user = JSON.parse(localStorage.getItem('login_success')) || false

if (!user) {
    Swal.fire ({
        icon: 'info',
        title: 'Iniciar sesión',
        text: 'Debes iniciar sesión para acceder a esta página',
        confirmButtonText: 'Ir a Iniciar Sesión'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html'
        }
    })
    //.then promesa que se encarga de verificar que si haga una función solo si se cumple la condición por el usuario.
}

let logout = document.querySelector('#logout')
logout.addEventListener('click' , () =>{
    Swal.fire ({
        icon: 'info',
        title: 'Cerrar Sesión',
        text: '¿Estas seguro de que quieres cerrar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Si, Cerrar Sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) =>{
        if (result.isConfirmed) {
            localStorage.removeItem('login_success');
            Swal.fire({
                icon: 'success',
                title: 'Sesión Cerrada',
                text: 'Tu sesión ha sido cerrada correctamente.',
                confirmButtonText: 'Ok'
            }).then(() => {
                window.location.href = 'login.html';
            });
        }
    });
});