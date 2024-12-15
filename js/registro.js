
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAJqvK0rVdRWnR_QlYiZl10Gc54Z3mNxwo",
    authDomain: "deroms-imports.firebaseapp.com",
    projectId: "deroms-imports",
    storageBucket: "deroms-imports.firebasestorage.app",
    messagingSenderId: "423221256690",
    appId: "1:423221256690:web:97bbc33d975413eb390b6b",
    measurementId: "G-WJPRC908TW"
};

  // Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

  // Registro de usuarios
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('contraseña').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('¡Usuario registrado con éxito!');
            registerForm.reset();
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});

