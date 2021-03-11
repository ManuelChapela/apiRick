
const body = document.querySelector("body");
const btnEnviar = document.getElementById("btnEnviar");
const btnPincharImg = document.getElementById("")


// Esta función podría eliminar un div contenedor con todos los elementos.
let box = [];
function cleanArray (box) {
    for (let i = 0; i < box.length ; i++) {
        box[i].remove()
}}

// variable global y localstorage


let myCharacter;

function apiRickMorty(character) {
    if(character !== "") {
        fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        .then(response => response.json())
        
        // Local Storage que recupera datos con el primer parámetro `busqueda+parametrodebusqueda`, JSON.stringify(data) que es una forma de hacer que se convierta en string el JSON. Se returna data originalmente para poder seguir trabajando con un JSON.
        .then(data => {
            localStorage.setItem(`${character}`, JSON.stringify(data) )
            myCharacter = character;
            return data
        })
            
        .then(data => {
            cleanArray(box);  
            console.log(data.results)        
            // elem(data)
            
            data.results.map(character => {
                //if no repetido
                elem(character)
                
            })
        })
    }
}


let characterInfo = {};




// FUNCIÓN que es invocada por la principal y que se encarga de pintar los diferentes nombres que coinciden con el parámetro de búsqueda. 
function elem(character) {
    let nameCharacter = document.createElement("p");
    nameCharacter.textContent = character.name;
    nameCharacter.setAttribute("class", "name");
    body.appendChild(nameCharacter);

          box.push(nameCharacter);

    nameCharacter.addEventListener("click", () => { imprimeDetalle(character.id)});
    }

// Esta función va a seleccionar el parámetro (a través de ID) e invocar la función pintaDetalle(detalles) para que nos indique todas las características que le pedimos.
function imprimeDetalle(detallePersonaje) {
    if(detallePersonaje !== "") {
        fetch(`https://rickandmortyapi.com/api/character/${detallePersonaje}`) 
        // El fetch tiene que llamar a los enlaces que tiene el personaje seleccionado por "id". 
        .then(response => response.json())
        .then(data => {
            characterInfo = data;
            console.log(characterInfo)  // Esta función dota de datos al addEventListener del botón Favs y se activa cuando se hace clic en el botón (sin parámetros. NUNCA PARÁMETROS EN EL EVENTO)
            cleanArray(box);
            pintaDetalle(data); 
            })
    }};


// Esta función pinta los detalles en el DOM con la imagen y todos los elementos. 
function pintaDetalle(detalles) {

    let detailImgCharacter = document.createElement("img");
    detailImgCharacter.src = detalles.image;
    body.appendChild(detailImgCharacter);

        box.push(detailImgCharacter);

    let detailNameCharacter = document.createElement("p");
    detailNameCharacter.textContent = detalles.name;
    body.appendChild(detailNameCharacter);

        box.push(detailNameCharacter);

    let detailStatusCharacter = document.createElement("p");
    detailStatusCharacter.textContent = detalles.status;
    body.appendChild(detailStatusCharacter);

        box.push(detailStatusCharacter);

    let detailSpeciesCharacter = document.createElement("p");
    detailSpeciesCharacter.textContent = detalles.species;
    body.appendChild(detailSpeciesCharacter);

        box.push(detailSpeciesCharacter);

    let detailGenderCharacter = document.createElement("p");
    detailGenderCharacter.textContent = detalles.gender;
    body.appendChild(detailGenderCharacter);

        box.push(detailGenderCharacter);

    let detailOriginCharacter = document.createElement("p");
    detailOriginCharacter.textContent = detalles.origin.name;
    body.appendChild(detailOriginCharacter);

        box.push(detailOriginCharacter);

    let createBoton = document.createElement("input");
    createBoton.setAttribute("id", "btnAtras");
    createBoton.setAttribute("class", "btnEnviar");
    createBoton.setAttribute("type", "button");
    createBoton.setAttribute("value", "Volver atrás");
    body.appendChild(createBoton);
        
        box.push(createBoton);

        // Creación botón de atrás con un evento de clic que nos imprime los datos almacenados en la busqueda anterior a través de localStorage. 
        createBoton.addEventListener("click", () => { 
            cleanArray(box);
            let obtencionDatosBusqueda = JSON.parse( localStorage.getItem (myCharacter))

                obtencionDatosBusqueda.results.map(character => {
                    elem(character)
                })
        
            console.log(obtencionDatosBusqueda);

        })

    let createBotonFav = document.createElement("input");
    createBotonFav.setAttribute("id", "BotonFav");
    createBotonFav.setAttribute("class", "btnEnviar");
    createBotonFav.setAttribute("type", "button");
    createBotonFav.setAttribute("value", "Añade a favoritos");
    body.appendChild(createBotonFav);
        
        box.push(createBotonFav);

        createBotonFav.addEventListener("click", writeFavs)


    let deleteBotonFav = document.createElement("input");
    deleteBotonFav.setAttribute("id", "BotonBorrarFav");
    deleteBotonFav.setAttribute("class", "btnEnviar");
    deleteBotonFav.setAttribute("type", "button");
    deleteBotonFav.setAttribute("value", "Elimina de favoritos");
    body.appendChild(deleteBotonFav);
        
        box.push(deleteBotonFav);

        deleteBotonFav.addEventListener("click", deleteFav)

}

// const btnFav = document.querySelector("BotonFav");
// btnFav.addEventListener("click", function (){

// })

btnEnviar.addEventListener("click", async () => {
 const value = document.getElementById("search").value;

 // 1) Pido a FB
 await readFavs();

 // 2) Pido a la API
 apiRickMorty(value);
 
 // console.log(apiRickMorty(value));
});






// INICIO CONEXIÓN CON FIREBASE

const firebaseConfig = {
    apiKey: "AIzaSyCasot5SM-EnX6wZ5x3EbVnfyKUxoyJDD0",
    authDomain: "rick-and-morty-api-manuel-ch.firebaseapp.com",
    // Hay que indicar la dirección https de Firebase (la url de nuestra database de Firebase). Entre "" y con databaseURL:
    databaseURL: "https://rick-and-morty-api-manuel-ch-default-rtdb.firebaseio.com/",
    projectId: "rick-and-morty-api-manuel-ch",
    storageBucket: "rick-and-morty-api-manuel-ch.appspot.com",
    messagingSenderId: "960779086999",
    appId: "1:960779086999:web:01cad20024996a29704dd2",
    measurementId: "G-D5W1FCRL4D"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//STEP by STEP following the documentation


let database = firebase.database();

// function saveElem (elem){
//     database
//         .ref('favoritos/'+ elem.id)
//         .set(JSON.stringify(elem))
// }



// Función de escribir Favoritos por id
function writeFavs() {
    // console.log("clic en el boton", characterInfo)
    // Meter nuevo mensaje
    database.ref('favoritos/' + characterInfo.id).update({ // characterInfo es una variable global a la que se puede acceder desde dentro del botón de clic al que no se le pueden poner parámetros. 
            name: characterInfo.name,
            id: characterInfo.id,
            gender: characterInfo.gender,
            status: characterInfo.status,
            location: characterInfo.location.name,
    })
}

// Función de borrar favoritos por id
function deleteFav () {
    database.ref('favoritos/' + characterInfo.id).remove()
}


// Función de consulta de Favoritos
const mainBtnFavs = document.getElementById("btnFavs")
const datosRecopilados = [];

function readFavs(){
    database.ref('favoritos').on('value', response => {
        
        // Consultar las respuestas 
        datosRecopilados = Object.values(response.val());

        // Pintar los datos mapeados de un objeto
        datosRecopilados.map(item => elem(item))
        
    })
}

mainBtnFavs.addEventListener("click", readFavs);
