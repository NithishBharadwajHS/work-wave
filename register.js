 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAHIS_VWepYjLR2ZyFzWt6JJJQecYmsjpQ",
   authDomain: "rk-wave.firebaseapp.com",
   projectId: "rk-wave",
   storageBucket: "rk-wave.firebasestorage.app",
   messagingSenderId: "976715130795",
   appId: "1:976715130795:web:51cc29473107782ff214ee",
   measurementId: "G-W40YKVV0FK"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


 const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const signup = document.getElementById('signup').value;
  const signin = document.getElementById('signin').value;
  Submit.addEventListener("click",function(event){
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Signed up successfully");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  });
