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
room=localStorage.getItem("room");

function Enviar()
{
mensaje=document.getElementById("mensaje").value;
firebase.database().ref(room).push({
  name:user,
message:mensaje,
like:0
});
document.getElementById("mensaje").value="";
}
function getData() {
    firebase.database().ref("/" + room).on('value', function (snapshot)
     { document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) 
      { childKey = childSnapshot.key;
           childData = childSnapshot.val();
           if (childKey != "purpose")
            { firebase_message_id = childKey; 
                message_data = childData;
                 console.log(firebase_message_id); 
                 console.log(message_data); 
                 name = message_data['name'];
                  message = message_data['message'];
                   like = message_data['like'];
                    name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                     message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>"; 
                       row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row; }

    });});}
getData();
function logout(){
  window.location = "index.html";
}
function redirectToRoomName(name) 
{ console.log(name);
     localStorage.setItem("room", name);
      window.location = "muro.html";
     }
    function updateLike(message_id)
    {
        buttonid= message_id;
        likes=document.getElementById(buttonid).value;
        updateLikes=Number(likes)+1;
        firebase.database().ref(room).child(message_id).update({
            like:updateLikes
        });
    }