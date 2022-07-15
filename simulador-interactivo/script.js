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

const infoCondicionAlumno = function(arrayAlumnos){
    for(alumno of arrayAlumnos){
        console.log('--------------------------------------------------------------------')
        console.log(`--------REGISTRO DE NOTAS DEL ALUMNO: ${alumno.nombre}--------`)
        console.log(`ID: ${alumno.id}`)
        console.log(`NOTA 1: ${alumno.nota1}`)
        console.log(`NOTA 2: ${alumno.nota2}`)
        console.log(`NOTA 3: ${alumno.nota3}`)

        let promedio = alumno.promedio()
        
        alumno.notaFinal = promedio

        if (promedio < 4){
            alumno.condicion = 'LIBRE'
            console.log(`LA NOTA FINAL PROMEDIO DEL ALUMNO ES : ${promedio}`)
            console.log(`CONDICIÓN FINAL : ${alumno.condicion}`)
        } else if(promedio < 8){
            alumno.condicion = 'REGULAR'
            console.log(`LA NOTA FINAL PROMEDIO DEL ALUMNO ES : ${promedio}`)
            console.log(`CONDICIÓN FINAL : ${alumno.condicion}`)
        } else if(promedio <= 10){
            alumno.condicion = 'PROMOVIDO'
            console.log(`LA NOTA FINAL PROMEDIO DEL ALUMNO ES : ${promedio}`)
            console.log(`CONDICIÓN FINAL : ${alumno.condicion}`)
        } else{console.log(`DEBE INGRESAR NOTAS VÁLIDAS...`)}

        console.log('\n')
        console.log('--------------------------------------------------------------------')
        console.log('\n')
    }

}

// Funcion para cargar alumnos
function cargaAlumnos(arrayAlumno){
    let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos a cargar: '))
    for(i = 0; i < cantidadAlumnos; i++){
        let alumno = new Alumno(parseInt(prompt('Ingrese el numero de ID del alumno: ')), (prompt('Ingrese el nombre del alumno: ')), parseInt(validadorNota()), parseInt(validadorNota()), parseInt(validadorNota()))
        arrayAlumno.push(alumno)
    }
    console.log('\n')
    console.log(('------------ALUMNOS CARGADOS------------'))
    console.log('\n')

}

// Funcion que devuelve listado de alumnos que cumplan la condicion pedida
function listaCondicionAlumnos(arrayAlumnos){
    let condicionBuscada;

    do{
        condicionBuscada = prompt('Ingrese la condición que desea buscar(recuerde que se le mostrara un listado de los alumnos según la condición que ingrese): ').toUpperCase()
    }while(condicionBuscada != 'LIBRE' && condicionBuscada != 'REGULAR' && condicionBuscada != 'PROMOVIDO')

    const resultado = arrayAlumnos.filter((alumno) => alumno.condicion === condicionBuscada)
    if(resultado != undefined){
        const listaFinal = resultado.map((alumno) => alumno.nombre)
        console.log(`Alumnos con condición ${condicionBuscada}: \n${listaFinal.join('\n')}`) 
        console.log('--------------------------------------------------------------------')
        console.log('\n')
    }else(alert('Alumno no encontrado o condicion ingresada incorrecta'))
}

// Funcion para eliminar registro de alumno
function eliminarAlumno(arrayAlumnos){

    let idAlumno = parseInt(prompt('Ingrese el ID del alumno a borrar del registro: '))
    const index = arrayAlumnos.findIndex(alumno => alumno.id === idAlumno);
    if (index != -1){
        arrayAlumnos.splice(index, 1)
        console.log('\n')
        console.log((`------------ALUMNO ELIMINADO------------`))
        console.log('\n')
    }else(alert('------------ALUMNO NO ENCONTRADO------------'))
    console.log('\n')
}

// Funcion para mostrar el menu de opciones del programa
function menuRegistroAlumnos(){
    let opcion = parseInt(prompt('Ingrese el numero de opción segun la acción que desea realizar(0 a 4): \n 1 - Cargar alumnos nuevos \n 2 - Consultar registro de alumnos \n 3 - Buscar listado alumnos según condición\n 4 - Eliminar alumno\n 0 - Salir'))
    return opcion   
}

// Funcion que ejecuta la tarea elegida por el usuario 
function opcionesPrograma(arrayAlumnos){

    alert('-------------Bienvenido al registro de Alumnos----------------')
    let opcionUsuario = menuRegistroAlumnos()

    while(opcionUsuario != 0){
        if(opcionUsuario === 1){
            cargaAlumnos(arrayAlumnos)
            opcionUsuario = menuRegistroAlumnos()
        }else if(opcionUsuario === 2){
            infoCondicionAlumno(arrayAlumnos)
            opcionUsuario = menuRegistroAlumnos()
        }else if(opcionUsuario === 3){
            listaCondicionAlumnos(arrayAlumnos)
            opcionUsuario = menuRegistroAlumnos()
        }else if(opcionUsuario === 4){
            eliminarAlumno(arrayAlumnos)
            opcionUsuario = menuRegistroAlumnos()
        }

    }
    alert('Gracias por su visita')  
}     

//Llamada a función para conocer condición del alumno:

arrayAlumno = [];

opcionesPrograma(arrayAlumno)
    
