function login(){
    window.location="kwitter_room.html";
    user=document.getElementById("user").value;
    localStorage.setItem("user",user)
}