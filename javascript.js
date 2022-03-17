/*Calcular sueldo neto anual teniendo en cuenta el descuento por rango salarial y nº de hijos,
 y el sueldo mensual según el nº de pagas.*/

const empleado = {
  sueldobruto: 26000,
  hijos: 2,
  pagas: 12,
};

let hijos = 0;
let neto;

if (empleado.sueldobruto < 12000) {
  rango = 0;
} else if (empleado.sueldobruto >= 12000 && empleado.sueldobruto < 24000) {
  rango = 0.08;
} else if (empleado.sueldobruto >= 24000 && empleado.sueldobruto < 34000) {
  rango = 0.16;
} else if (empleado.sueldobruto >= 34000) {
  rango = 0.3;
}

if (empleado.sueldobruto > 12000 && empleado.hijos > 0) {
  rango = rango - 0.02;
}

let descuentorango = empleado.sueldobruto * rango;
neto = empleado.sueldobruto - descuentorango;

console.log('Sueldo neto anual: ' + neto + '€');

let mensualidad = neto / empleado.pagas;

console.log('Sueldo mensual: ' + mensualidad + '€');
