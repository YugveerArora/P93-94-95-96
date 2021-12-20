const firebaseConfig = {
      apiKey: "AIzaSyDsO8x6jbcOyLrA4KSPZTAMelF4VVL_1PU",
      authDomain: "chatter-8250b.firebaseapp.com",
      databaseURL: "https://chatter-8250b-default-rtdb.firebaseio.com",
      projectId: "chatter-8250b",
      storageBucket: "chatter-8250b.appspot.com",
      messagingSenderId: "832680010534",
      appId: "1:832680010534:web:3d0b79c1ecb1b0ae5257e7",
      measurementId: "G-1L7N8B8BW1"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "addingRoomName"

      });
      localStorage.setItem("room_name", room_name);
      window.location = "chatter_page.HTML";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;


                  //End code
            });
      });
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
getData();