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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
