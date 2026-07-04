const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    if(email === "" || password === ""){

        alert("Please fill all fields.");

        return;

    }

    // Save login info
    localStorage.setItem("userEmail", email);

    alert("Login Successful!");

    window.location.href = "browse.html";

});