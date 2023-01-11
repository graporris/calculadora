let n0 = document.getElementById("0");
let n1 = document.getElementById("1");
let n2 = document.getElementById("2");
let n3 = document.getElementById("3");
let n4 = document.getElementById("4");
let n5 = document.getElementById("5");
let n6 = document.getElementById("6");
let n7 = document.getElementById("7");
let n8 = document.getElementById("8");
let n9 = document.getElementById("9");
let sumar = document.getElementById("+");
let restar = document.getElementById("-");
let dividir = document.getElementById("/");
let multiplicar = document.getElementById("*");
let punto = document.getElementById(".");
let igual = document.getElementById("=");
let clean = document.getElementById("clean");
let supr = document.getElementById("supr");

let resultado = document.getElementById("pantalla");

let operacion = [];

//funciones botones
n0.onclick = function() {
  resultado.textContent = resultado.textContent  + "0";
}
n1.onclick = function() {
  resultado.textContent = resultado.textContent  + "1";
}
n2.onclick = function() {
  resultado.textContent = resultado.textContent  + "2";
}
n3.onclick = function() {
  resultado.textContent = resultado.textContent  + "3";
}
n4.onclick = function() {
  resultado.textContent = resultado.textContent  + "4";
}
n5.onclick = function() {
  resultado.textContent = resultado.textContent  + "5";
}
n6.onclick = function() {
  resultado.textContent = resultado.textContent  + "6";
}
n7.onclick = function() {
  resultado.textContent = resultado.textContent  + "7";
}
n8.onclick = function() {
  resultado.textContent = resultado.textContent  + "8";
}
n9.onclick = function() {
  resultado.textContent = resultado.textContent  + "9";
}
punto.onclick = function() {
  resultado.textContent = resultado.textContent  + ".";
}

//opraciones
sumar.onclick = function() {
  resultado.textContent = resultado.textContent  + "+";
  operacion.push(resultado.textContent);
  resultado.textContent = "";
}
restar.onclick = function() {
  resultado.textContent = resultado.textContent  + "-";
  operacion.push(resultado.textContent);
  resultado.textContent = "";
}
multiplicar.onclick = function() {
  resultado.textContent = resultado.textContent  + "*";
  operacion.push(resultado.textContent);
  resultado.textContent = "";
}
dividir.onclick = function() {
  resultado.textContent = resultado.textContent  + "/";
  operacion.push(resultado.textContent);
  resultado.textContent = "";
}

igual.onclick = function() {
  operacion.push(resultado.textContent);
  resolver();
}

clean.onclick = function() {
  borrar();
}

supr.onclick = function() {
  borrarUltimo();  
}

function borrar() {
  operacion = [];
  resultado.textContent = "";
}

function borrarUltimo() {
  resultado.textContent = resultado.textContent.slice(0, -1);
  return resultado.textContent;
}

function resolver() {
  let rta = eval(operacion.join(""));
  borrar();
  resultado.textContent = rta;

  return resultado;
}




/*let a = parseInt(prompt('Ingrese un número'));
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
}*/


