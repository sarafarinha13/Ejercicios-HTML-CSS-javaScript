// Guardamos en una variable el elemento del HTML con id "contenedor"
let contenedor = document.getElementById("contenedor");

let inputTuit = document.getElementById("tuit");
let publicarTuit = document.getElementById("buttonTuit");

/* Una vez llamados el boton y el tuit hacemos que cada vez que le demos a publicar se cree un post */
publicarTuit.addEventListener("click", function(){
    let textoUsuario = inputTuit.value; /* value permite obtener o cambiar el texto que ha escrito el usuario dentro de un input o textarea */
    createPost(textoUsuario, "@prisionMike", "img/1 (7).jpg");
    inputTuit.value = ""; /* se resetea y vuelve a visualizarse lo que pusimos en el placeholder */
});    



/* creamos usuarios y mensajes predeterminados */
let usuarios = [
    {nombre: "@prankOfficeCeo", foto: "img/jim.jpg"},
    {nombre: "@receptionQueen", foto:"img/pam.jpg"},
    {nombre: "@farmerDwight", foto:"img/dwight.jpg"},
    {nombre: "@rylly", foto: "img/rylly.png"},
    {nombre: "@idontcareStanley", foto: "img/stanley.jpg"},
    {nombre: "theBESTboss", foto: "img/michael.jpg"}
];

let mensajes = [
    "Bears. Beets. Battlestar Galactica.",
    "That's what she said.",
    "Identity theft is not a joke!",
    "I declare bankruptcy!",
    "Jim stop it..."
];

/* CREAMOS FUNCION RANDOM  */

function getRandom(lista){
    return lista[Math.floor(Math.random() * lista.length)];
}

/*Creamos una función llamada createPost Esta función servirá para generar un nuevo post en la página */
function createPost(textoUsuario, nombre, foto){

    /* POST */
    // Creamos un nuevo <div> en JavaScript (aún no está en el HTML)
    let post = document.createElement("div");

    // Le añadimos la clase "post" para poder darle estilos con CSS
    post.classList.add("post");

    // Añadimos ese div dentro del contenedor (ahora sí aparece en pantalla)
    contenedor.appendChild(post);


    /* CONTENIDO DEL POST */
    let post_user = document.createElement("div");
        post_user.classList.add("post_user");

    let post_tuit = document.createElement("div");
        post_tuit.classList.add("post_tuit");

    let post_likes = document.createElement("div");
        post_likes.classList.add("post_likes");

      
    post.appendChild(post_user);
    post.appendChild(post_tuit);
    post.appendChild(post_likes);


    /* CONTENIDO POST_USER */
    let avatar = document.createElement("img");
        avatar.classList.add("post_avatar");
        avatar.src= foto; /* aqui lo igualamos a las fotos del ARRAY de USUARIOS */

    let username = document.createElement("p");
        username.classList.add("post_username");
        username.innerText = nombre;  /* aqui lo igualamos a los nombres del ARRAY de USUARIOS */

    post_user.appendChild(avatar);
    post_user.appendChild(username);

    /* CONTENIDO POST_TUIT */
    let texto = document.createElement("p");
        texto.classList.add("post_texto");
        texto.innerText = textoUsuario; /* aqui lo igualamos al texto que entra por teclado en el buttonTuit publicar del HTML */

    post_tuit.appendChild(texto);

    /* CONTENIDO POST_LIKES */
    let likes_corazon = document.createElement("button");
        likes_corazon.classList.add("likes_corazon");
        likes_corazon.innerHTML = '<i class="fa-solid fa-mug-hot"></i>'; /* conectado por el link del head al  font Awesome */
      
    let likes_contador = document.createElement("span");
        likes_contador.classList.add("likes_contador");
        likes_contador.innerText = "0";

    post_likes.appendChild(likes_corazon);
    post_likes.appendChild(likes_contador);

    /* CREAR FUNCIONAMIENTO BOTÓN DE LIKE (likes_corazon) */

    likes_corazon.addEventListener("click", function(){
        
        let numeroLikes = parseInt(likes_contador.innerText); /* #1 cogemos el número actual  */

        if(likes_corazon.classList.contains("liked")){
            numeroLikes--;
            likes_contador.innerText = numeroLikes;

            likes_corazon.classList.remove("liked");
            likes_corazon.innerHTML = '<i class="fa-solid fa-mug-hot"></i>';

        }else{
            numeroLikes++;
            likes_contador.innerText = numeroLikes;
            likes_corazon.classList.add("liked");
            likes_corazon.innerHTML = '<i class="fa-solid fa-mug-hot"></i>';

            likes_corazon.classList.add("animar"); /* Añadimos una clase nueva "animar" */

            setTimeout(function() {
                likes_corazon.classList.remove("animar");
            }, 50);
        }
    });

    /* CREAMOS UNA FUNCION QUE GENERE POST CON NOMBRES/ FOTOS Y MENSAJES ALEATORIOS */

    function postRandom(){

        let mensajesRandom = getRandom(mensajes);
        let usuariosRandom = getRandom(usuarios);

        createPost(mensajesRandom, usuariosRandom.nombre, usuariosRandom.fotoY )

        setTimeout(postRandom, )

       


    }
    setTimeout(function(){
        let mensajesRandom = getRandom(mensajes);
        let usuariosRandom = getRandom(usuarios);

        createPost(
            mensajesRandom, usuariosRandom.nombre, usuariosRandom.fotoY 
        );

    }, 20000);

}
