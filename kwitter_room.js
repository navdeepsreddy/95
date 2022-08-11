// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHuXyJnhyms7oH4urDCJNhoODKT-Q8PHA",
  authDomain: "kwitter-pro-3052e.firebaseapp.com",
  projectId: "kwitter-pro-3052e",
  storageBucket: "kwitter-pro-3052e.appspot.com",
  messagingSenderId: "1095476677025",
  appId: "1:1095476677025:web:d4b40651e31cc117bae3e0",
  measurementId: "G-LG63R7XXZ2"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";

        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();

  
