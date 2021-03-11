const firebaseConfig = {
  apiKey: "AIzaSyDxDds9V5X4dW-JkTyUMclnZObEPP4313Y",
  authDomain: "urban-monsters.firebaseapp.com",
  databaseURL: "https://urban-monsters-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "urban-monsters",
  storageBucket: "urban-monsters.appspot.com",
  messagingSenderId: "316615256952",
  appId: "1:316615256952:web:7b3cc829cad09b9958f68d",
};

firebase.initializeApp(firebaseConfig);

let next = 0;

// Actualizar el valor del mensaje siguiente
firebase
  .database()
  .ref('favoritos')
  .on('value', response =>
    next = response.val().length
);

function readMessages() {
  
  // Acceder a la BD
  const database = firebase.database();
  
  // Pedir datos
  const messagesRef = database.ref('favoritos');
  
  messagesRef.on('value', (response) => {
    const data = response.val();
    
    // Pintar datos
    let nameCharacter = document.createElement("p");
    nameCharacter.textContent = data.map((item) =>
    `${item.name} `);
    nameCharacter.setAttribute("class", "name");
    nameCharacter.setAttribute("id", "name");

    body.appendChild(nameCharacter);


    }
  
  );
}







// let ultimo;

function writeMessage(name) {

  // Meter nuevo mensaje
  database.ref('favoritos/' + ultimo).update({
    name: name,
    
  });
}

document
  .querySelector("#btnFavs")
  .addEventListener("click", readMessages)

  writeMessage("Hola")