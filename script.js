// Trabajo Práctico Nro. 1


// . 1 .  Se desea calcular la distancia recorrida (en metros) por un móvil que tiene una velocidad constante (m/s) durante un tiempo T (Sg), ambos valores ingresados por el usuario. Considerar que es un MRU (Movimiento Rectilíneo Uniforme).

// EJERCICIO 1
const calcularDistancia = () => {
    let tiempo = Number(prompt('Ingrese el tiempo'));
    let velocidad = Number(prompt('Ingrese la velocidad'));

    let resultado = tiempo * velocidad;
    alert(`La distancia recorida es de ${resultado} metros`);
    return
}

// calcularDistancia();


// . 2 .  Se necesita obtener el promedio de un estudiante a partir de sus tres notas parciales ingresadas por el usuario.
// . 2.1 . .. idem para tres alumnos.

// EJERCICIO 2
let promedio = 0;

const calcularPromedio = () => {
    let notas = [];
    let resultado = 0;

    for (let i = 0; i < 3; i++) {
        const nota = Number(prompt(`Ingrese la nota ${i + 1}`));
        notas.push(nota);
    }

    console.log(notas);

    for(nota of notas){
        resultado += nota;
    }

    promedio = Math.round(resultado / notas.length);
    alert(`EL promedio final del alumno es de ${promedio}`);
    return promedio
}

// calcularPromedio();

// EJERCICIO 2-1
const calcularPromedioAlumnos = () => {
    for (let i = 0; i < 3; i++) {
        calcularPromedio();
        alert(`EL promedio final del alumno ${i + 1} es de ${promedio}`);
    }
}

// calcularPromedioAlumnos();

// . 3 .  Elaborar un algoritmo que solicite el número de respuestas correctas, incorrectas y en blanco, correspondientes a un postulante, y muestre su puntaje final considerando, que por cada respuesta correcta tendrá 4 puntos, respuestas incorrectas tendrá -1 y respuestas en blanco tendrá 0.

// EJERCICIO 3
const obtenerPuntaje = () => {
    let resultado;

    let respuestasCorrectas = Number(prompt('Ingresar respuestas correctas'));
    let respuestasIncorrectas = Number(prompt('Ingresar respuestas incorrectas'));
    let respuestasEnBlanco = Number(prompt('Ingresar respuestas en blanco'));

    const asignarValor = () => {
        respuestasCorrectas *= 4; 
        respuestasIncorrectas *= -1; 
        respuestasEnBlanco *= 0;

        resultado = respuestasCorrectas + respuestasIncorrectas + respuestasEnBlanco;
    }
    asignarValor();
    alert(`El resultado final es de ${resultado} puntos`);
    console.log(`El resultado final es de ${resultado} puntos`);
    return resultado;
}

// obtenerPuntaje();

// . 4 .  Elaborar un algoritmo que permita ingresar el número de partidos ganados, perdidos y empatados, por un equipo, se debe de mostrar su puntaje total, teniendo en cuenta que por cada partido ganado obtendrá 3 puntos, empatado 1 punto y perdido 0 puntos.

// EJERCICIO 4
const obtenerPuntajeEquipo = () => {
    let resultado;

    let partidosGanados = Number(prompt('Ingresar partidos ganados'));
    let partidosPerdidos = Number(prompt('Ingresar partidos perdidos'));
    let partidosEmpatados = Number(prompt('Ingresar partidos empatados'));

    const asignarValor = () => {
        partidosGanados *= 3; 
        partidosPerdidos *= 0; 
        partidosEmpatados *= 1;

        resultado = partidosGanados + partidosPerdidos + partidosEmpatados;
    }
    
    asignarValor();
    
    alert(`El resultado final del equipo es de ${resultado} puntos`);
    console.log(`El resultado final del equipo es de ${resultado} puntos`);
    return resultado;
}

// obtenerPuntajeEquipo();







