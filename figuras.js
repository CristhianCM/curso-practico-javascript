// Código del Cuadrado //

console.group("Cuadrados");

// -------- PERIMETRO ------------

function perimetroCuadrado(lado) {
  return lado * 4;
}

// -------- AREA ------------

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Código del triángulo //

console.group("Triángulos");

// -------- PERIMETRO ------------

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// -------- AREA ------------

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Código del circulo //

console.group("Circulos");

// -------- DIAMETRO ------------

function diametroCirculo(radio) {
  return radio * 2;
}

// -------- PI ------------

const PI = Math.PI;
console.log("PI es : " + PI);

// -------- CIRCUNFERENCIA ------------

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// -------- AREA ------------

function areatroCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Aquí Interactuamos con el HTML

// - Cuadrado - //

// -------- PERIMETRO ------------

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

// -------- AREA ------------

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// - Triangulo - //

// -------- PERIMETRO ------------

function calcularPerimetroTriangulo() {
  const input = document.getElementById("InputTriangulo");
  const value = input.value;

  const perimetro = perimetroTriangulo(value);
  alert(perimetro);
}

// -------- AREA ------------

function calcularAreaTriangulo() {
  const input = document.getElementById("InputTriangulo");
  const value = input.value;

  const area = areaTriangulo(value);
  alert(area);
}

// - Circulo - //

// -------- PERIMETRO ------------

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

// -------- AREA ------------

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areatroCirculo(value);
  alert(area);
}
