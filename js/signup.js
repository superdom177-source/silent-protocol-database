import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const signupButton = document.getElementById("signupButton");


signupButton.addEventListener("click", () => {


const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


createUserWithEmailAndPassword(auth, email, password)

.then(() => {

    document.getElementById("message").innerHTML =
    "ACCOUNT CREATED. RETURNING TO LOGIN...";

    setTimeout(() => {

        window.location.href = "login.html";

    }, 2000);


})


.catch((error) => {

    document.getElementById("message").innerHTML =
    "ERROR: " + error.message;

});


});
