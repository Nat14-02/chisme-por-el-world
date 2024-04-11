var firebaseConfig = {
      apiKey: "AIzaSyCUGEw8D68QS67iQ6fY-Wl2ds4e5WOD4q8",
      authDomain: "kwitter-2cc0d.firebaseapp.com",
      databaseURL: "https://kwitter-2cc0d-default-rtdb.firebaseio.com",
      projectId: "kwitter-2cc0d",
      storageBucket: "kwitter-2cc0d.appspot.com",
      messagingSenderId: "810629203665",
      appId: "1:810629203665:web:b743cc076208b4ab5e67f0"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE

user=localStorage.getItem("user");
document.getElementById("welcome").innerHTML="Bienvenido "+user;


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
