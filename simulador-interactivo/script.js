// Algoritmo que calcula promedio y nota final del alumno

// Función validadora de nota(valida que las notas sena mayor a 0 y menor a 10)

const validadorNota = function(){
    let nota
    do {
        nota = parseInt(prompt('Ingrese la nota del alumno: '))
    } while (nota < 1 || nota > 10)
    return nota
}

// Función de registro que muestra en pantalla toda la info de notas del alumno, asi como su conidición final

const infoCondicionALumno = function(alumno, nota1, nota2, nota3, promedio){
    console.log(`--------REGISTRO DE NOTAS DEL ALUMNO: ${alumno}--------`)
    console.log(`NOTA 1: ${nota1}`)
    console.log(`NOTA 2: ${nota2}`)
    console.log(`NOTA 3: ${nota3}`)

    if (promedio < 4){
        console.log(`LA NOTA FINAL PROMEDIO DEL ALUMNO ES : ${promedio}`)
        console.log(`CONDICIÓN FINAL : LIBRE`)
    } else if(promedio < 8){
        console.log(`LA NOTA FINAL PROMEDIO DEL ALUMNO ES : ${promedio}`)
        console.log(`CONDICIÓN FINAL : REGULAR`)
    } else if(promedio <= 10){
        console.log(`LA NOTA FINAL PROMEDIO DEL ALUMNO ES : ${promedio}`)
        console.log(`CONDICIÓN FINAL : PROMOVIDO`)
    } else{console.log(`DEBE INGRESAR NOTAS VÁLIDAS...`)}
}

// Pedido de nombre del alumno para registro:
let nombreAlumno = prompt('Ingrese el nombre del alumno: ')

//Llamada a funcion para pedido de notas y validación de las mismas:
let nota1 = validadorNota()
let nota2 = validadorNota()
let nota3 = validadorNota()

//Calculo de promedio:
let promedio = (nota1 + nota2 + nota3) / 3

//Llamada a función para conocer condición del alumno:
infoCondicionALumno(nombreAlumno, nota1, nota2, nota3, promedio)




