// Desafio Complementario 1

// Tablas de Multiplicar

let numero_usuario

// Validación de número ingresado por usuario

do{

    numero_usuario = prompt('Ingrese el número del cual desee conocer su tabla de multiplicación: ')

} while(isNaN(numero_usuario))

// Ciclo "for" que multiplica el número del usuario

let resultado = 0

for(i = 1; i <= 10; i++){

    resultado = i * numero_usuario
    console.log(resultado)

}
