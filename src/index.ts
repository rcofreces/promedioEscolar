let cantidadAlumnos: number = Number(prompt("Ingrese la cantidad de alumnos"));
let nombresArreglo: string[] = new Array(cantidadAlumnos);
let notaPrimerTrimestre: number[] = new Array(cantidadAlumnos);
let notaSegundoTrimestre: number[] = new Array(cantidadAlumnos);
let notaTercerTrimestre: number[] = new Array(cantidadAlumnos);
let indice: number = 0;

for (indice = 0; indice < nombresArreglo.length; indice++) {
  nombresArreglo[indice] = String(
    prompt(`Ingrese el nombre del alumno de la posición ${indice + 1}`)
  );
  notaPrimerTrimestre[indice] = Number(
    prompt(`Ingrese la nota del primer trimestre del alumno ${indice + 1}`)
  );
  notaSegundoTrimestre[indice] = Number(
    prompt(`Ingrese la nota del segundo trimestre del alumno ${indice + 1}`)
  );
  notaTercerTrimestre[indice] = Number(
    prompt(`Ingrese la nota del tercer trimestre del alumno ${indice + 1}`)
  );
  console.log(
    `Las notas del alumno ${nombresArreglo[indice]} son: ${notaPrimerTrimestre[indice]}, ${notaSegundoTrimestre[indice]}, ${notaTercerTrimestre[indice]}`
  );
}

function promedio(
  v1: number[],
  v2: number[],
  v3: number[],
  indice: number
): number {
  let resultado: number =
    (notaPrimerTrimestre[indice] +
      notaSegundoTrimestre[indice] +
      notaTercerTrimestre[indice]) /
    3;
  return resultado;
}

for (indice = 0; indice < nombresArreglo.length; indice++) {
  console.log(
    `El promedio de notas del alumno ${nombresArreglo[indice]} es: ${promedio(
      notaPrimerTrimestre,
      notaSegundoTrimestre,
      notaTercerTrimestre,
      indice
    )}`
  );
}

let consultaAlumno: string = String(prompt("Ingrese el alumno a consultar"));
indice = nombresArreglo.indexOf(consultaAlumno);

console.log(
  `El Promedio anual del alumno ${consultaAlumno} es: ${promedio(
    notaPrimerTrimestre,
    notaSegundoTrimestre,
    notaTercerTrimestre,
    indice
  )}`
);
