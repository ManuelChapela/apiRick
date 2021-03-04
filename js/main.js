const body = document.querySelector("body");
const btnEnviar = document.getElementById("btnEnviar");
const btnPincharImg = document.getElementById("")


let box = [];
function cleanArray (box) {
    for (let i = 0; i < box.length ; i++) {
        box[i].remove()
}}

// variable global y localstorage




function apiRickMorty(character) {
    if(character !== "") {
        fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        .then(response => response.json())
        
        .then(data => 
            localStorage.setItem("busqueda", JSON.stringify(data) ))
            return data
            
        .then(data => {
            cleanArray(box);
            // elem(data)
            data.results.map(character => {
                elem(character)
            });
            console.log(data)
        // .then(data => {
        //     elemDetalle(character)
        // }    
        })
    }
}



function elem (character) {

    // let imageCharacter = document.createElement("img");
    // imageCharacter.src = character.image;
    // imageCharacter.setAttribute("class", "imageCharacter");
    // body.appendChild(imageCharacter);
    // box.push(imageCharacter);

    // imageCharacter.addEventListener("click", () => { imprimeDetalle(character.id)});

    let nameCharacter = document.createElement("p");
    nameCharacter.textContent = character.name;
    nameCharacter.setAttribute("class", "name");
    body.appendChild(nameCharacter);

          box.push(nameCharacter);

    nameCharacter.addEventListener("click", () => { imprimeDetalle(character.id)});


    // let locationCharacter = document.createElement("p");
    // locationCharacter.textContent = character.location.name;
    // locationCharacter.setAttribute("class", "dates");
    // body.appendChild(locationCharacter);

    //      box.push(locationCharacter);

    // let originCharacter = document.createElement("p");
    // originCharacter.textContent = character.origin.name;
    // originCharacter.setAttribute("class", "dates");
    // body.appendChild(originCharacter);

    //      box.push(originCharacter);
    };




function imprimeDetalle(detallePersonaje) {
    if(detallePersonaje !== "") {
        fetch(`https://rickandmortyapi.com/api/character/${detallePersonaje}`) 
        // El fetch tiene que llamar a los enlaces que tiene el personaje seleccionado por "id". 
        .then(response => response.json())
        .then(data => {
            cleanArray(box);
            pintaDetalle(data);
            })
    }};


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

        createBoton.addEventListener("click", () => {  })

// let character = data;

// // Guardar datos al almacenamiento local actual
// localStorage.setItem("nombreDeBusqueda", character);

// // Acceder a datos almacenados
// alert( "nombreDeBusqueda = " + localStorage.getItem("nombreDeBusqueda"));
    

}



btnEnviar.addEventListener("click", function() {
    const value = document.getElementById("search").value;

    apiRickMorty(value);
    
    // console.log(apiRickMorty(value));
  });













/*


     .then(data => {
            cleanArray(box);
            // elem(data)
            data.results.map(character => {
                elem(character)

            

 
*/


// function elemDetalle(character){
//     const imagenPinchada = character.filter( character => character.id);

// }











// function elem(character) {

//     // for (let i = 0; i > data1.results.length ; i++){
//     // let character = data1.results[i] // character.id


// let infoImage = document.createElement("img");
// infoImage.setAttribute("class", "infoImage");
// // infoImage.setAttribute("id", "infoImage");
// infoImage.src = character.image;
// body.appendChild(infoImage);

//     container.push(infoImage); // Para la funcion borrar


//     let infoName = document.createElement("p");
// infoName.setAttribute("class", "infoName");
// infoName.innerText = ("Name: ") + character.name;
// body.appendChild(infoName);

//     container.push(infoName); // Para la funcion borrar



// let infoSpecies = document.createElement("p");
// infoSpecies.setAttribute("class", "infoSpecies");
// // infoSpecies.setAttribute("id", "infoSpecies");
// infoSpecies.innerText = ("Specie: ") + character.species;
// body.appendChild(infoSpecies);

//     container.push(infoSpecies); // Para la funcion borrar


// let infoGender = document.createElement("p");
// infoGender.setAttribute("class", "infoGender");
// infoGender.setAttribute("id", "infoGender");
// infoGender.innerText = ("Gender: ") + character.gender;
// body.appendChild(infoGender);

//     container.push(infoGender); // Para la funcion borrar


// let infoLocation = document.createElement("p");
// infoLocation.setAttribute("class", "infoLocation");
// infoLocation.setAttribute("id", "infoLocation");
// infoLocation.innerText = ("Location: ") + character.location.name;
// body.appendChild(infoLocation);

//     container.push(infoLocation); // Para la funcion borrar




// let infoMore = document.createElement("a");
// infoMore.setAttribute("class", "moreInfo");
// infoMore.setAttribute("id", "infoMore");
// infoMore.setAttribute("href", character.url);
// infoMore.innerText = "Show More";
// body.appendChild(infoMore);

//     container.push(infoMore); 









// document.getElementById("moreInfo").addEventListener("click", function() {
//     const infoMore2 = document.getElementById("moreInfo")
//         infoMore2.setAttribute("href", character.url);

// }
     

 



    // ------------------------------------------------------ BOTON
    // for (let j = 0; j < data.info.length ; j++){
    // let next = data.info.next;
    // let prev = data.info.prev

    // let btnPrev = document.createElement("input");
    // btnPrev.setAttribute("class", "btnPrev");
    // btnPrev.setAttribute("id", "btnPrev");
    // btnPrev.setAttribute("type", "button");
    // btnPrev.setAttribute("value", "Prev");
    // btnPrev.innerText = prev;
    // body.appendChild(btnPrev);

    // let btnNext = document.createElement("input");
    // btnNext.setAttribute("class", "btnNext");
    // btnNext.setAttribute("id", "btnNext");
    // btnNext.setAttribute("type", "button");
    // btnNext.setAttribute("value", "Next");
    // body.appendChild(btnNext);

    // body.getElementById("btnNext").addEventListener("click", )
    // }
    





// let searchingBar = document.createElement("input");
// searchingBar.setAttribute("class", "searchingBar");
// searchingBar.setAttribute("id", "searchingBar");
// searchingBar.setAttribute("type", "text");
// searchingBar.setAttribute("value", "");
// body.appendChild(searchingBar);

// let infoContainer = document.createElement("div")
// infoContainer.setAttribute("class", "infoContainer");
// infoContainer.setAttribute("id", "infoContainer");
// body.appendChild(infoContainer);

// const infoContainer = document.getElementById("infoContainer");

