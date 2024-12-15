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


 // Inicio de sesión
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('contraseña').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('¡Inicio de sesión exitoso!');
            loginForm.reset();
            document.getElementById('logout').style.display = 'block';
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});

 // Detectar cambios en el estado de autenticación
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('Usuario autenticado:', user.email);
    } else {
        console.log('Usuario no autenticado');
    }
});