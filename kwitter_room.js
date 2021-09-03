user_name=localStorage.getItem("user_name");
document.getElementById("name").innerHTML=user_name;

function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);

window.location= "kwitter_page.html";

}

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBClJkLiFFuBQ3EOasKe5Tf7YUNoqJWrt4",
      authDomain: "project-kwitter-71fa2.firebaseapp.com",
      databaseURL: "https://project-kwitter-71fa2-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-71fa2",
      storageBucket: "project-kwitter-71fa2.appspot.com",
      messagingSenderId: "959576000647",
      appId: "1:959576000647:web:482d6e7df0dd4d09019022",
      measurementId: "G-JD4YC2JTPY"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout(){
      window.location="index.html";
}

