// Algoritmo que calcula promedio y nota final del alumno

// Función validadora de nota(valida que las notas sea mayor a 0 y menor o igual a 10)

const validadorNota = function(){
    let nota
    do {
        nota = parseInt(prompt('Ingrese la nota del alumno: '))
    } while (nota < 1 || nota > 10)
    return nota
}

// Clase alumno:

class Alumno{
    constructor(id, nombre, nota1, nota2, nota3){
        this.id = id
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    // Metodo para calcular promedio
    promedio(){
        let notaFinal = (this.nota1 + this.nota2 + this.nota3) / 3;
        return notaFinal
    }
}

// Función de registro que muestra en pantalla toda la info de notas de los alumnos, asi como su conidición final

const infoCondicionALumno = function(arrayAlumnos){
    for(Alumno of arrayAlumnos){
        console.log('--------------------------------------------------------------------')
        console.log(`--------REGISTRO DE NOTAS DEL ALUMNO: ${Alumno.nombre}--------`)
        console.log(`ID: ${Alumno.id}`)
        console.log(`NOTA 1: ${Alumno.nota1}`)
        console.log(`NOTA 2: ${Alumno.nota2}`)
        console.log(`NOTA 3: ${Alumno.nota3}`)

        let promedio = Alumno.promedio()
    
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

}

// Creacion de array de alumnos:

let alumnosPrimerAnio = []

let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos que desea cargar: '))


// Ciclo a utilizar para crear objeto alumnos segun la cantidad informada por el usuario:
for(i = 0; i < cantidadAlumnos; i++){
    let alumno = new Alumno((prompt('Ingrese el numero de ID del alumno: ')), (prompt('Ingrese el nombre del alumno: ')), parseInt(validadorNota()), parseInt(validadorNota()), parseInt(validadorNota()))
    alumnosPrimerAnio.push(alumno)
}


//Llamada a función para conocer condición del alumno:
infoCondicionALumno(alumnosPrimerAnio)




