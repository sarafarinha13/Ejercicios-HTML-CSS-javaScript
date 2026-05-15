console.log("JS CONECTADO");

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

let respuesta_pc = "";

/* -----CREAR BOTÓN DEL PC----- */
const contenedor_pc = document.querySelector("#contenedor_pc");

const boton_pc = document.createElement("button");
const img_pc = document.createElement("img");

contenedor_pc.appendChild(boton_pc);
boton_pc.appendChild(img_pc);

img_pc.classList.add("img_juego");
boton_pc.classList.add("boton_juego");



/* Variables del propio */
let num;


img_pc.src ="img/predeterminado.png";

/* RESPUESTA PC TRAS ELEGIR RESPUESTA USUARIO */
piedra.addEventListener("click", generarRespuesta);
papel.addEventListener("click", generarRespuesta);
tijera.addEventListener("click", generarRespuesta);


/* GENERADOR DE RESPUESTA DEL PC */
function generarRespuesta(){

    num = Math.floor(Math.random()*3)+1;

    if(num === 1){
        console.log("Es piedra");
        img_pc.src = "img/p.png";
        respuesta_pc = "piedra";
  
    }else 
        if(num === 2){
            console.log("Es papel");
            img_pc.src = "img/pa.png";
            respuesta_pc = "papel";

    }else
        if(num === 3){
            console.log("Es tijera");
            img_pc.src = "img/t.png"
            respuesta_pc = "tijera";
        }
    

};