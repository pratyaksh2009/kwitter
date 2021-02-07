
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyAY8EpZMPW5C3C5TNullGNBlAB4dk_zArI",
  authDomain: "kwrri-27e3b.firebaseapp.com",
  databaseURL: "https://kwrri-27e3b-default-rtdb.firebaseio.com",
  projectId: "kwrri-27e3b",
  storageBucket: "kwrri-27e3b.appspot.com",
  messagingSenderId: "375011507688",
  appId: "1:375011507688:web:ba5e583c6bc2572fb1f85d",
  measurementId: "G-HJ51ELJ921"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELLCOME "+user_name+"!";
function getData() { firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; }); }); }
getData();
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
