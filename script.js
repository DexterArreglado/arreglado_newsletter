document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const subscribeBtn = document.querySelector(".subBtn"); 
    const errorMessage = document.getElementById("errorMessage");
    const successState = document.getElementById("successState");
    const signUpForm = document.getElementById("form");
    const dismissBtn = document.querySelector(".dismissBtn"); 
    const userEmail = document.querySelector(".userEmail");

    subscribeBtn.addEventListener("click", function(event) {
        event.preventDefault(); 
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            userEmail.innerText = email;
            signUpForm.classList.add("hidden");
            successState.classList.remove("hidden");
            emailInput.style.border = "1px solid #ddd"; 
            errorMessage.innerText = "";
        } else {
            errorMessage.innerText = "Valid email required";
            emailInput.style.border = "1px solid hsl(4, 100%, 67%)"; 
        }
    });

    dismissBtn.addEventListener("click", function() {
        successState.classList.add("hidden");
        signUpForm.classList.remove("hidden");
        emailInput.value = "";
        errorMessage.innerText = "";
        emailInput.style.border = "1px solid #ddd"; 
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});