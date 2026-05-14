console.log("JS CONECTADO");

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

const contenedor_pc = document.getElementsByClassName("contenedor_pc");

contenedor_pc.createElement("button");



/* Variables del propio */
let num;
const imgPC = document.createElement("img");


imgPC.addClass("boton");

respuestaPC.addEventListener("click", generarRespuesta);

function generarRespuesta(){

    num = Math.floor(Math.random()*3)+1;

    if(num === 1){
        console.log("Es piedra");
        imgPC.src = "img/p.png";
        imgPC

    }else 
        if(num === 2){
            console.log("Es papel");
            imgPC.src = "img/pa.png";
    }else
        if(num === 3){
            console.log("Es tijera");

        }

};