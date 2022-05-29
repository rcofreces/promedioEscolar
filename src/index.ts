let nombresArreglo: string[] = new Array(3);
let iNombres: number;
let notasArreglo: number[] = new Array(3);
let iNotas: number;

for (iNombres = 0; iNombres < nombresArreglo.length; iNombres++) {
  nombresArreglo[iNombres] = prompt(
    `Ingrese el nombre del alumno de la posición ${iNombres} es:`
  );
}
for (iNombres = 0; iNombres < nombresArreglo.length; iNombres++) {
  console.log(`El nombre del alumno en la posición ${iNombres} es:`);
}
