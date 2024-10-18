const carrito = [];

// Agregar al carrito
function agregarCarrito () {
    // Extraer los datos del producto seleccionado y agregarlos al carrito
    const producto = {
        descripcion: document.getElementById('modelo').textContent,
        precio: parseFloat(document.getElementById('precio').textContent.replace('$', '').replace('.', '')),
        cantidad: 1 // Se agg un producto por compra por ahora xd
    };

    // Agregar el producto al carrito
    carrito.push(producto);
    mostrarCarrito ();
    updateCarritoDisplay();
}

// Función Comprar el producto
    function comprar() {
            swal.fire ({
                icon: 'success',
                title: 'Compra lista',
                text: 'Se realizo la compra del producto'
            }).then(() => {

            // cerrar carrito
            const carritoContainer = document.getElementById('carrito-container');
            carritoContainer.style.display = 'none'; // Cambia de 'block' a 'none'
            })
        }

// Mostrar carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.style.display = 'block'; // Cambia de 'none' a 'block'
}

// Borrar un producto del carrito
    function borrarProducto(index) {
        carrito.splice(index, 1);
        updateCarritoDisplay();
    }

// Calcular el total del carrito
    function calculoTotal() {
        let total = 0;
        carrito.forEach(product => {
            total += product.precio * product.cantidad;
        });
        return total;
    }

function updateCarritoDisplay() {
    const carritoItemElement = document.getElementById('items-carrito'); // Donde se mostrará el carrito
    carritoItemElement.innerHTML = ''; // Limpiar antes de agregar los nuevos elementos

    const ulElement = document.createElement('ul');
    carrito.forEach(producto => {
        const liElement = document.createElement('li');

        // Crear los elementos dentro del carrito con más organización
        const descripcionElement = document.createElement('span');
        descripcionElement.textContent = producto.descripcion;

        const cantidadElement = document.createElement('span');
        cantidadElement.textContent = `Cantidad: ${producto.cantidad}`;

        const precioElement = document.createElement('span');
        precioElement.textContent = `Precio: $${(producto.precio * producto.cantidad).toFixed(2)}`;

        // Añadir los elementos al <li>
        liElement.appendChild(descripcionElement);
        liElement.appendChild(cantidadElement);
        liElement.appendChild(precioElement);

        // Añadir <li> a la lista
        ulElement.appendChild(liElement);
    });

    carritoItemElement.appendChild(ulElement);

    // Mostrar el total
    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${calculoTotal().toFixed(2)}`;
}


