import { auth } from "./firebase.js";

import { 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const loginButton = document.getElementById("loginButton");


loginButton.addEventListener("click", () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    signInWithEmailAndPassword(auth, email, password)

    .then(() => {

        window.location.href = "index.html";

    })

    .catch((error) => {

        document.getElementById("message").innerHTML =
        "ACCESS DENIED: " + error.message;

    });

});
