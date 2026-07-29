import { auth } from "./firebase.js";

import { 
    signOut 
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const logoutButton = document.getElementById("logoutButton");


logoutButton.addEventListener("click", () => {

    signOut(auth)
    .then(() => {

        window.location.href = "login.html";

    });

});
