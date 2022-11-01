'use strict'


let sueldo, impuesto, sueldoFinal;

sueldo = parseFloat(prompt("introduce tu sueldo actual porfavor" + " bebechonchito"));

impuesto = sueldo * .05;

document.write("se te desconto un total de impuestos de: " + impuesto)

sueldoFinal = sueldo - impuesto;

document.write("tu sueldo descontando impuestos es: " + sueldoFinal)






