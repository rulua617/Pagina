/* preguntas */
const bd_juego = [
    {
        id: 0,
        pregunta: "¿Qué significa HTML?",
        op0: "Hyper Transfer Markup Language",
        op1: "Hyper Text Markup Language",
        op2: "High-Level Text Markup Language",
        correcta: "1"
    },
    {
        id: 1,
        pregunta: "¿Cuál es el propósito principal de HTML en el desarrollo web?",
        op0: "Estilizar páginas web",
        op1: "Crear contenido interactivo",
        op2: "Definir la estructura de una página web",
        correcta: "2"
    },
    {
        id: 2,
        pregunta: "¿Cuál es el elemento HTML básico que se utiliza para crear un párrafo?",
        op0: "<paragraph>",
        op1: "<p>",
        op2: "<para>",
        correcta: "1"
    },
    {
        id: 3,
        pregunta: "¿Cómo se crea un encabezado de nivel 1 en HTML?",
        op0: "<header1>",
        op1: "<h1>",
        op2: "<heading1>",
        correcta: "1"
    },
    {
        id: 4,
        pregunta: "¿Qué etiqueta se usa para crear una lista no ordenada en HTML?",
        op0: "<ul>",
        op1: "<ol>",
        op2: "<list>",
        correcta: "0"
    },
    {
        id: 5,
        pregunta: "¿Cómo se crea un enlace a otro sitio web en HTML?",
        op0: "<a href='(enlace)'>Enlace</a>",
        op1: "<link src='(enlace)'>Enlace</link>",
        op2: "<hyperlink>(enlace)</hyperlink>",
        correcta: "0"
    },
    {
        id: 6,
        pregunta: "¿Cuál es la etiqueta básica para insertar una imagen en una página web?",
        op0: "<img src='imagen.jpg'>",
        op1: "<picture source='imagen.jpg'>",
        op2: "<image>imagen.jpg</image>",
        correcta: "0"
    },
    {
        id: 7,
        pregunta: "¿Qué elemento HTML se utiliza para crear un salto de línea?",
        op0: "<break>",
        op1: "<newline>",
        op2: "<br>",
        correcta: "2"
    },
    {
        id: 8,
        pregunta: "¿Qué atributo se utiliza para definir el texto alternativo de una imagen en HTML?",
        op0: "alt",
        op1: "description",
        op2: "text",
        correcta: "0"
    },
    {
        id: 9,
        pregunta: "¿Qué significa 'hipervínculo' en el contexto de HTML?",
        op0: "Un enlace que lleva a otra página web o recurso",
        op1: "Un elemento para crear tablas en HTML",
        op2: "Un formato de video en HTML",
        correcta: "0"
    }
]

//para guardar las respuestas elegidas
let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;
//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");

    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funciòn.
    // A dicha función le envio el numero de label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);

    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la funciòn que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}


//botón corregir
let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){
        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){ /* correcto rpt */
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }else{//no acerto
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }

    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    window.scrollTo(0,0);
  /* corregir */
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (10-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}