


/*


// [INICIO CODIGO DE LUIS]
function saveElem (elem){
    firebase.database()
        .ref('favoritos/'+ elem.id)
        .set(JSON.stringify(elem))
}

function printFavs () {
    firebase
        .database()
        .ref('favoritos')
        .on('value', (response) => {
            const data = response.val()
            const array = Object.values(data)
            array.map(elem => printSearch(JSON.parse(elem)))
        })
}

const btnFav = document.querySelector("#botonFav");
btnFav.addEventListener("click", printFavs)

// [FIN CODIGO DE LUIS]

*/