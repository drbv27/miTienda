/* let cualquierElemento = document.images; */
const d = document;//yo DiegoB creo esta variable para evitar copiar document varias veces
//hay 3 selectores en JS, el primero ya va de salida
//que es seleccionar por clases
//getElementsByClassname

const contenedor = document.getElementsByClassName('card')

console.log(contenedor)

//seleccionar por ID
//getElementById

const monitores = d.getElementById('monitores')
const carrito = d.getElementById('carrito')

console.log(monitores)
console.log(carrito)

// la tercera sintaxis o forma de seleccionar en JS
//la moderna
//querySelector()

const tarjeta = d.querySelector('.card')
console.log(tarjeta)

//ya que podemos seleccionar elementos
//podemos modificarlos tmb

let titulo = d.querySelector('main h1');
/* titulo="Liz's Store"
console.log(titulo) */
/* titulo.innerText = "Liz's Store" */
/* console.log(titulo) */

let titulo1 = d.querySelector('main h1').innerText;
//cuando en css tenga visibility:hidden
let titulo2 = d.querySelector('main h1').textContent;
let titulo3 = d.querySelector('main h1').innerHTML;



console.log(titulo1)
console.log(titulo2)
console.log(titulo3)

