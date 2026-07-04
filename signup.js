const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
        alert("Please fill all fields.");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    // Save user details
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully!");

    window.location.href = "login.html";
});