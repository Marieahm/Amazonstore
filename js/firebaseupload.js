
import firebase from "firebase/app";
import "firebase/storage"
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
firebase.initializeApp(firebaseConfig);
console.log(firebase);
 const storage = firebase.storage();
 export {storage , firebase as default};
 /*
const firebase = require("firebase");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);
firebase.initializeApp(functions.config().firebase);
// Get the Auth service for the default app
var authService = firebase.auth();

 function createUserWithEmailAndPassword(request, response) {
        const email = request.query.email;
        const password = request.query.password;
        if (!email) {
            response.send("query.email is required.");
            return;
        }
        if (!password) {
            response.send("query.password is required.");
            return;
        }
        return authService.createUserWithEmailAndPassword(email, password)
            .then(success => {
                let responseJson = JSON.stringify(success);
                console.log("createUserWithEmailAndPassword.responseJson", responseJson);
                response.send(responseJson);
            })
            .catch(error => {
                let errorJson = JSON.stringify(error);
                console.log("createUserWithEmailAndPassword.errorJson", errorJson);
                response.send(errorJson);
            });
    }*/