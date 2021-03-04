const body = document.querySelector("body");
const btnEnviar = document.getElementById("btnEnviar");
const btnPincharImg = document.getElementById("")


let box = [];
function cleanArray (box) {
    for (let i = 0; i < box.length ; i++) {
        box[i].remove()
}}



function apiRickMorty(character) {
    if(character !== "") {
        fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        .then(response => response.json())
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
            
            // elem(data)
            //  => document.getElementById("infoName").innerHTML)
        })
    }
}



function elem (character) {

    // const contenedorPrincipal = document.getElementById("contenedorPrincipal")

    // let contenedorPrincipal = document.createElement("div");
    // contenedorPrincipal.setAttribute("id", "contenedorPrincipal");
    // body.appendChild(contenedorPrincipal);
    let imageCharacter = document.createElement("img");
    imageCharacter.src = character.image;
    imageCharacter.setAttribute("class", "imageCharacter");
    body.appendChild(imageCharacter);

    imageCharacter.addEventListener("click", () => { imprimeDetalle(character)});

        box.push(imageCharacter);

    let nameCharacter = document.createElement("p");
    nameCharacter.textContent = character.name;
    nameCharacter.setAttribute("class", "name");
    body.appendChild(nameCharacter);

          box.push(nameCharacter);

    let locationCharacter = document.createElement("p");
    locationCharacter.textContent = character.location.name;
    locationCharacter.setAttribute("class", "dates");
    body.appendChild(locationCharacter);

         box.push(locationCharacter);

    let originCharacter = document.createElement("p");
    originCharacter.textContent = character.origin.name;
    originCharacter.setAttribute("class", "dates");
    body.appendChild(originCharacter);

         box.push(originCharacter);


    };



    

function imprimeDetalle(idPersonaje) {
    if(idPersonaje !== "") {
        fetch(`https://rickandmortyapi.com/api/location/${idPersonaje}`)
        .then(response => response.json())
        .then(data => {
            cleanArray(box);
            data.map(episode => { pintaDetalle(episode) });
            
            })
    }}

/*


     .then(data => {
            cleanArray(box);
            // elem(data)
            data.results.map(character => {
                elem(character)

            

function pintaDetalle(detalles) {

    let episodios = document.createElement("img");
    episodios.src = detalles.episode;
    body.appendChild(episodios);



}
 
*/


// function elemDetalle(character){
//     const imagenPinchada = character.filter( character => character.id);

// }


btnEnviar.addEventListener("click", function() {
    const value = document.getElementById("search").value;

    apiRickMorty(value);
    
    // console.log(apiRickMorty(value));
  });











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

