import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAHIS_VWepYjLR2ZyFzWt6JJJQecYmsjpQ",
    authDomain: "rk-wave.firebaseapp.com",
    projectId: "rk-wave",
    storageBucket: "rk-wave.appspot.com",
    messagingSenderId: "976715130795",
    appId: "1:976715130795:web:51cc29473107782ff214ee",
    measurementId: "G-W40YKVV0FK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupButton = document.getElementById('signup-button');
signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Signed up successfully");
        })
        .catch((error) => {
            alert(error.message);
        });
});

const signinButton = document.getElementById('signin-button');
signinButton.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Signed in successfully");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});