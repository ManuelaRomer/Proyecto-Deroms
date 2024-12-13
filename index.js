import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAJqvK0rVdRWnR_QlYiZl10Gc54Z3mNxwo",
    authDomain: "deroms-imports.firebaseapp.com",
    projectId: "deroms-imports",
    storageBucket: "deroms-imports.firebasestorage.app",
    messagingSenderId: "423221256690",
    appId: "1:423221256690:web:97bbc33d975413eb390b6b",
    measurementId: "G-WJPRC908TW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


function guardar(){
    db.collection("usuarios").add({
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        contraseña: document.getElementById("contraseña").value,
    })
    .then((docRef) => {
        alert("registro exitoso")
    })
    .catch((error) => {
        alert("Error en el registro")
    });
}
