
const firebaseConfig = {
      apiKey: "AIzaSyCwxrYtLjTvkLFl_vv16tj_qrWiTte0JiM",
      authDomain: "kwitter-53694.firebaseapp.com",
      databaseURL: "https://kwitter-53694-default-rtdb.firebaseio.com",
      projectId: "kwitter-53694",
      storageBucket: "kwitter-53694.appspot.com",
      messagingSenderId: "83699305789",
      appId: "1:83699305789:web:e809ed2329279a871d8954"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{

}