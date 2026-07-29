import { auth } from "./firebase.js";

import {
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const resetButton = document.getElementById("resetButton");


resetButton.addEventListener("click", () => {


const email = document.getElementById("email").value;


sendPasswordResetEmail(auth, email)

.then(() => {

    document.getElementById("message").innerHTML =
    "RESET LINK SENT. CHECK YOUR EMAIL.";

})


.catch((error) => {

    document.getElementById("message").innerHTML =
    "ERROR: " + error.message;

});


});
