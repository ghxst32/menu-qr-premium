fetch("productos.json")
.then(response => response.json())
.then(productos => {

const menu = document.getElementById("menu");

productos.forEach(producto => {

const pedido = encodeURIComponent(
`Hola, quiero pedir ${producto.nombre}`
);

menu.innerHTML += `

<div class="card">

<img src="${producto.imagen}">

<div class="info">

<h2>${producto.nombre}</h2>

<p class="descripcion">

${producto.descripcion}

</p>

<p class="precio">

$${producto.precio}

</p>

<a
class="btn"
href="https://wa.me/526681234567?text=${pedido}">
Ordenar Ahora
</a>

</div>

</div>

`;

});

});