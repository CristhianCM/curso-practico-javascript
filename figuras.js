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
