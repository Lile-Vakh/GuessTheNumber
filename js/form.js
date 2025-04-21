const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelectorAll(".error").forEach(el => el.remove());
    let isValid = true;

    const fName = document.getElementById("fName");
    const lName = document.getElementById("lName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const checkboxes = document.querySelectorAll(".checkboxes input[type='checkbox']");

    if (fName.value.trim() === "") {
        showError(fName, "First name is required");
        isValid = false;
    }

    function showError(element, message) {
        const error = document.createElement("div");
        error.className = "error";
        error.textContent = message;
        if (element.classList.contains("checkboxes")) element.insertAdjacentElement("afterend", error);
        else element.parentElement.appendChild(error);
    }

    if (lName.value.trim() === "") {
        showError(lName, "Last name is required");
        isValid = false;
    }

    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!validateEmail(email.value.trim())) {
        showError(email, "Invalid email format");
        isValid = false;
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    if (password.value.trim() === "") {
        showError(password, "Password is required");
        isValid = false;
    } else if (password.value.trim().length < 8) {
        showError(password, "Password must be at least 8 characters");
        isValid = false;
    }

    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const checkboxContainer = document.querySelector(".checkboxes");
    if (checkedCount < 3) {
        showError(checkboxContainer, "Please select at least 3 technologies");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("container").style.display = "none";
        document.getElementById("game-container").style.display = "block";
    }
});
