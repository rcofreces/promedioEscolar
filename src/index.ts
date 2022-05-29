let nombresArreglo: string[] = new Array(3);
let iNombres: number;
let notasArreglo: number[] = new Array(3);
let iNotas: number;
let resultado0: number = 0;
let resultado1: number = 0;
let resultado2: number = 0;

for (iNombres = 0; iNombres < nombresArreglo.length; iNombres++) {
  nombresArreglo[iNombres] = String(
    prompt(`Ingrese el nombre del alumno de la posición ${iNombres}`)
  );
  console.log(
    `El nombre del alumno en la posición ${iNombres} es: ${nombresArreglo[iNombres]}`
  );
}
for (iNotas = 0; iNotas < notasArreglo.length; iNotas++) {
  notasArreglo[iNotas] = Number(
    prompt(`Ingrese las notas del alumno ${nombresArreglo[0]}`)
  );
  console.log(
    `Las notas del alumno ${nombresArreglo[0]} son: ${notasArreglo[iNotas]}`
  );
  resultado0 += notasArreglo[iNotas] / 3;
}
console.log(
  `El promedio de notas del alumno ${nombresArreglo[0]} es: ${resultado0}`
);
for (iNotas = 0; iNotas < notasArreglo.length; iNotas++) {
  notasArreglo[iNotas] = Number(
    prompt(`Ingrese las notas del alumno ${nombresArreglo[1]}`)
  );
  console.log(
    `Las notas del alumno ${nombresArreglo[1]} son: ${notasArreglo[iNotas]}`
  );
  resultado1 += notasArreglo[iNotas] / 3;
}
console.log(
  `El promedio de notas del alumno ${nombresArreglo[1]} es: ${resultado1}`
);
for (iNotas = 0; iNotas < notasArreglo.length; iNotas++) {
  notasArreglo[iNotas] = Number(
    prompt(`Ingrese las notas del alumno ${nombresArreglo[2]}`)
  );
  console.log(
    `Las notas del alumno ${nombresArreglo[2]} son: ${notasArreglo[iNotas]}`
  );
  resultado2 += notasArreglo[iNotas] / 3;
}
console.log(
  `El promedio de notas del alumno ${nombresArreglo[2]} es: ${resultado2}`
);
