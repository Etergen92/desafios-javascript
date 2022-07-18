// Algoritmo que calcula 1 y nota final del alumno

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
        this.notaFinal = '' ;
        this.condicion = '';
    }

    // Metodo para calcular promedio y condición:
    promedio(){
        let notaFinal = (this.nota1 + this.nota2 + this.nota3) / 3;
        this.notaFinal = notaFinal
        // return notaFinal
        if (notaFinal < 4){
            this.condicion = 'LIBRE'
        } else if(notaFinal< 8){
            this.condicion = 'REGULAR'
        } else if(notaFinal<= 10){
            this.condicion = 'PROMOVIDO'
        }

        }
    
}

// Función de registro que agrega a HTML y muestra en pantalla tarjetas de info de todos los alumnos cargados:

const mostrarTarjetasAlumnos = function(arrayAlumno, elementoHTML){
    for(let alumno of arrayAlumno){
        
        elementoHTML.innerHTML += `
            
            <div class="card cardFlex" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${alumno.nombre}</h5>
                <h6 class="card-subtitle mb-2 text-muted">ID: ${alumno.id}</h6>
                <p class="card-text">Nota 1: ${alumno.nota1}</p>
                <p class="card-text">Nota 2: ${alumno.nota2}</p>
                <p class="card-text">Nota 3: ${alumno.nota3}</p>
                <p class="card-text">Nota Final: ${alumno.notaFinal}</p>
                <p class="card-text">Condición: ${alumno.condicion}</p>
                </div>
            </div>
            ` 

    } 
}

// Funcion que muestra por alert los alumnos cargados por defecto en el arreglo

const infoCondicionAlumno = function(arrayAlumnos){
    for(let alumno of arrayAlumnos){
        alert(`ALUMNO: ${alumno.nombre}\nID: ${alumno.id} || NOTA 1: ${alumno.nota1} || NOTA 2: ${alumno.nota2} || NOTA 3: ${alumno.nota3} || PROMEDIO : ${alumno.notaFinal} || CONDICIÓN: ${alumno.condicion}`)
    }
}

// Funcion para cargar alumnos y calcular promedio

function cargaAlumnos(arrayAlumnos){
    alert('A continuación le mostraremos la información de los alumnos cargados:')
    infoCondicionAlumno(arrayAlumnos)
    let cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos a cargar: '))
    for(let i = 1; i <= cantidadAlumnos; i++){
        let alumno = new Alumno((7 + i), (prompt('Ingrese el nombre del alumno: ')), parseInt(validadorNota()), parseInt(validadorNota()), parseInt(validadorNota()))
        alumno.promedio()
        arrayAlumnos.push(alumno)
    }
    alert(('------------ALUMNO/S CARGADO/S------------'))
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
        alert(`Alumnos con condición ${condicionBuscada}: \n${listaFinal.join('\n')}`) 
    }else(alert('Alumno no encontrado o condicion ingresada incorrecta'))
}

// Funcion para eliminar registro de alumno(muestra por alert los alumnos cargados anteriormente para saber el ID del objeto a eliminar)

function eliminarAlumno(arrayAlumnos){

    alert('A continuación le mostraremos la información de los alumnos cargados:')
    infoCondicionAlumno(arrayAlumnos)
    let idAlumno = parseInt(prompt('Ingrese el ID del alumno a borrar del registro: '))
    const index = arrayAlumnos.findIndex(alumno => alumno.id === idAlumno);
    if (index != -1){
        arrayAlumnos.splice(index, 1)
        alert(`------------ALUMNO ELIMINADO------------`)
    }else(alert('------------ALUMNO NO ENCONTRADO------------'))
}

// Funcion para mostrar el menu de opciones del programa

function menuRegistroAlumnos(){
    let opcion = parseInt(prompt('Ingrese el numero de opción segun la acción que desea realizar(0 a 4):\n 1 - Cargar alumnos nuevos\n 2 - Consultar tarjetas de registro de alumnos\n 3 - Buscar listado alumnos según condición\n 4 - Eliminar alumno\n 0 - Salir'))
    return opcion   
}


// Creacion de arreglo para cargar objetos:
arrayAlumno = [];

// Carga de obejtos a arreglo alumnos:
arrayAlumno.push(new Alumno(1, 'Jose Perez', 7, 7, 6))
arrayAlumno.push(new Alumno(2, 'Federico Gonzalez', 2, 1, 6))
arrayAlumno.push(new Alumno(3, 'Juan Ludueña', 8, 7, 9))
arrayAlumno.push(new Alumno(4, 'Laura Diaz', 7, 7, 10))
arrayAlumno.push(new Alumno(5, 'Paula Casares', 2, 1, 4))
arrayAlumno.push(new Alumno(6, 'Esther Rodriguez', 4, 2, 2))
arrayAlumno.push(new Alumno(7, 'Pedro Priam', 7, 8, 6))

// Calculo promedios y condiciones de alumnos cargados:
const promediosCondicion = arrayAlumno.forEach(alumno => {
    alumno.promedio()
});

// Captura de elemento HTML para utilizar en función MostrarTarjetasAlumnos en HTML:
let alumnosTarjetas = document.getElementById('contenedor-tarjetas')

alert('-------------Bienvenido al registro de Alumnos----------------')
let opcionUsuario = menuRegistroAlumnos()

while(opcionUsuario != 0){
    if(opcionUsuario === 1){
        cargaAlumnos(arrayAlumno)
        opcionUsuario = menuRegistroAlumnos()
    }else if(opcionUsuario === 2){
        mostrarTarjetasAlumnos(arrayAlumno, alumnosTarjetas)
        alert('Ingrese 0 para salir y poder visualizar los registros.')
        opcionUsuario = menuRegistroAlumnos()
    }else if(opcionUsuario === 3){
        listaCondicionAlumnos(arrayAlumno)
        opcionUsuario = menuRegistroAlumnos()
    }else if(opcionUsuario === 4){
        eliminarAlumno(arrayAlumno)
        opcionUsuario = menuRegistroAlumnos()
    }
}
alert('Gracias por su visita')      

    
