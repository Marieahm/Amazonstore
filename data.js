
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo-Q0zrH7SVIbXBCsawig5bicL4biLNeg",
    authDomain: "store-c946b.firebaseapp.com",
    databaseURL: "https://store-c946b-default-rtdb.firebaseio.com",
    projectId: "store-c946b",
    storageBucket: "store-c946b.appspot.com",
    messagingSenderId: "287705606459",
    appId: "1:287705606459:web:69e96aa24fd52af52e2f1e",
    measurementId: "G-GH97N4K27K"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}