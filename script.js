let a = parseInt(prompt('Ingrese un número'));
let b = parseInt(prompt('Ingrese un número'));
let opcion = prompt('a-suma b-resta c-multiplicación d-división e-salir');

const suma = (a,b) => (a+b);
const resta = (a,b) => (a-b);
const multiplicacion = (a,b) => (a*b);
const division = (a,b) => (a/b);

while (opcion != 'e') {
  if (opcion == 'a') {
    alert('Suma: ' + suma(a,b));
  } else if (opcion == 'b') {
    alert('Resta: ' + resta(a,b));
  } else if (opcion == 'c') {
    alert('Multiplicación: ' + multiplicacion(a,b));
  } else if (opcion == 'd') {
   alert('División: ' + division(a,b));
  } else {
    alert('Opción no válida');
  }
  opcion = prompt('a-suma b-resta c-multiplicación d-división e-salir');
}