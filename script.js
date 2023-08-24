// Trabajo Práctico Nro. 1

// . 1 .  Se desea calcular la distancia recorrida (en metros) por un móvil que tiene una velocidad constante (m/s) durante un tiempo T (Sg), ambos valores ingresados por el usuario. Considerar que es un MRU (Movimiento Rectilíneo Uniforme).

// . 2 .  Se necesita obtener el promedio de un estudiante a partir de sus tres notas parciales ingresadas por el usuario.
// . 2.1 . .. idem para tres alumnos.

// . 3 .  Elaborar un algoritmo que solicite el número de respuestas correctas, incorrectas y en blanco, correspondientes a un postulante, y muestre su puntaje final considerando, que por cada respuesta correcta tendrá 4 puntos, respuestas incorrectas tendrá -1 y respuestas en blanco tendrá 0.

// . 4 .  Elaborar un algoritmo que permita ingresar el número de partidos ganados, perdidos y empatados, por un equipo, se debe de mostrar su puntaje total, teniendo en cuenta que por cada partido ganado obtendrá 3 puntos, empatado 1 punto y perdido 0 puntos.


// <---- RESOLUCIÓN EJERCICIOS PSEUDOCÓDIGO ---->

// EJERCICIO 1- 

// -DATOS: 

// num tiempo
// num velocidad
// num resultado

// -INSTRUCCIONES:

// Ingresar (tiempo, "Ingrese el tiempo");
// Ingresar (velocidad, "Ingrese la velocidad");
// multiplicar (resultado, tiempo, velocidad);
// Mostrar (resultado, "El resultado de MRU es : " + resultado);

// EJERCICIO 2- 

// -DATOS: 

// num primerNota
// num segundaNota
// num tercerNota
// num resultado
// num promedioFinal

// -INSTRUCCIONES:

// Ingresar (primerNota, "Ingrese la Primer Nota");
// Ingresar (segundaNota, "Ingrese la Segunda Nota");
// Ingresar (tercerNota, "Ingrese la Tercer Nota");
// Sumar (resultado, primerNota, segundaNota);
// Sumar (resultado, resultado, tercerNota);
// Dividir (promedioFinal, resultado, 3);
// Mostrar (promedioFinal, "El promedio final del estudiante es : " + promedioFinal);

// EJERCICIO 2.1- 

// -DATOS: 

// num primerNota
// num segundaNota
// num tercerNota
// num resultado
// num promedioFinal

// -INSTRUCCIONES:

// Ingresar (primerNota, "Ingrese la Primer Nota del Primer estudiante");
// Ingresar (segundaNota, "Ingrese la Segunda Nota del Primer estudiante");
// Ingresar (tercerNota, "Ingrese la Tercer Nota del Primer estudiante");
// Sumar (resultado, primerNota, segundaNota);
// Sumar (resultado, resultado, tercerNota);
// Dividir (promedioFinal, resultado, 3);
// Mostrar (promedioFinal, "El promedio final del primer estudiante es : " + promedioFinal);

// Ingresar (primerNota, "Ingrese la Primer Nota del Segundo estudiante");
// Ingresar (segundaNota, "Ingrese la Segunda Nota del Segundo estudiante");
// Ingresar (tercerNota, "Ingrese la Tercer Nota del Segundo estudiante");
// Sumar (resultado, primerNota, segundaNota);
// Sumar (resultado, resultado, tercerNota);
// Dividir (promedioFinal, resultado, 3);
// Mostrar (promedioFinal, "El promedio final del segundo estudiante es : " + promedioFinal);

// Ingresar (primerNota, "Ingrese la Primer Nota del Tercer estudiante");
// Ingresar (segundaNota, "Ingrese la Segunda Nota del Tercer estudiante");
// Ingresar (tercerNota, "Ingrese la Tercer Nota del Tercer estudiante");
// Sumar (resultado, primerNota, segundaNota);
// Sumar (resultado, resultado, tercerNota);
// Dividir (promedioFinal, resultado, 3);
// Mostrar (promedioFinal, "El promedio final del tercer estudiante es : " + promedioFinal);

// EJERCICIO 3- 

// -DATOS: 

// num respuestasCorrectas
// num respuestasIncorrectas
// num respuestasEnBlanco
// num resultado

// -INSTRUCCIONES:

// Ingresar (respuestasCorrectas, "Ingresar las respuestas Correctas");
// Ingresar (respuestasIncorrectas, "Ingresar las respuestas Incorrectas");
// Ingresar (respuestasEnBlanco, "Ingresar las respuestas en Blanco");
// Multiplicar (respuestasCorrectas, respuestasCorrectas, 4);
// Multiplicar (respuestasIncorrectas, respuestasIncorrectas, -1);
// Multiplicar (respuestasEnBlanco , respuestasEnBlanco , 0);
// Sumar (resultado, respuestasCorrectas, respuestasIncorrectas);
// Sumar (resultado, resultado, respuestasEnBlanco );
// Mostrar (resultado, "El resultado final es : " + resultado);

// EJERCICIO 4- 

// -DATOS: 

// num partidosGanados
// num partidosEmpatados
// num partidosPerdidos
// num resultado

// -INSTRUCCIONES:

// Ingresar (partidosGanados, "Ingresar los partidos ganados");
// Ingresar (partidosEmpatados, "Ingresar los partidos empatados");
// Ingresar (partidosPerdidos, "Ingresar los partidos perdidos");
// Multiplicar (partidosGanados, partidosGanados, 3);
// Multiplicar (partidosEmpatados, partidosEmpatados, 1);
// Multiplicar (partidosPerdidos, partidosPerdidos, 0);
// Sumar (resultado, partidosGanados, partidosEmpatados);
// Sumar (resultado, resultado, partidosPerdidos);
// Mostrar (resultado, "El puntaje final es : " + resultado);




// <---- RESOLUCIÓN EJERCICIOS JAVASCRIPT ---->

// EJERCICIO 1
// const calcularDistancia = () => {
//     let tiempo = Number(prompt('Ingrese el tiempo'));
//     let velocidad = Number(prompt('Ingrese la velocidad'));

//     let resultado = tiempo * velocidad;
//     alert(`La distancia recorida es de ${resultado} metros`);
//     return
// }

// EJERCICIO 2
// let promedio = 0;

// const calcularPromedio = () => {
//     let notas = [];
//     let resultado = 0;

//     for (let i = 0; i < 3; i++) {
//         const nota = Number(prompt(`Ingrese la nota ${i + 1}`));
//         notas.push(nota);
//     }

//     console.log(notas);

//     for(nota of notas){
//         resultado += nota;
//     }

//     promedio = Math.round(resultado / notas.length);
//     alert(`EL promedio final del alumno es de ${promedio}`);
//     return promedio
// }

// EJERCICIO 2-1
// const calcularPromedioAlumnos = () => {
//     for (let i = 0; i < 3; i++) {
//         calcularPromedio();
//         alert(`EL promedio final del alumno ${i + 1} es de ${promedio}`);
//     }
// }

// EJERCICIO 3
// const obtenerPuntaje = () => {
//     let resultado;

//     let respuestasCorrectas = Number(prompt('Ingresar respuestas correctas'));
//     let respuestasIncorrectas = Number(prompt('Ingresar respuestas incorrectas'));
//     let respuestasEnBlanco = Number(prompt('Ingresar respuestas en blanco'));

//     const asignarValor = () => {
//         respuestasCorrectas *= 4; 
//         respuestasIncorrectas *= -1; 
//         respuestasEnBlanco *= 0;

//         resultado = respuestasCorrectas + respuestasIncorrectas + respuestasEnBlanco;
//     }
    
//     asignarValor();
    
//     alert(`El resultado final es de ${resultado} puntos`);
//     console.log(`El resultado final es de ${resultado} puntos`);
//     return resultado;
// }

// EJERCICIO 4
// const obtenerPuntajeEquipo = () => {
//     let resultado;

//     let partidosGanados = Number(prompt('Ingresar partidos ganados'));
//     let partidosPerdidos = Number(prompt('Ingresar partidos perdidos'));
//     let partidosEmpatados = Number(prompt('Ingresar partidos empatados'));

//     const asignarValor = () => {
//         partidosGanados *= 3; 
//         partidosPerdidos *= 0; 
//         partidosEmpatados *= 1;

//         resultado = partidosGanados + partidosPerdidos + partidosEmpatados;
//     }
    
//     asignarValor();
    
//     alert(`El resultado final del equipo es de ${resultado} puntos`);
//     console.log(`El resultado final del equipo es de ${resultado} puntos`);
//     return resultado;
// }


// calcularDistancia();
// calcularPromedio();
// calcularPromedioAlumnos();
// obtenerPuntaje();
// obtenerPuntajeEquipo();


