// Password strength checking function
function checkPasswordStrength() {
    const passwordInput = document.getElementById('passwordInput').value;
    let strength = "Very Weak";
    const lengthCriteria = passwordInput.length >= 8;
    const digitCriteria = /\d/.test(passwordInput);
    const uppercaseCriteria = /[A-Z]/.test(passwordInput);
    const lowercaseCriteria = /[a-z]/.test(passwordInput);
    const specialCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput);

    const criteriaMet = [lengthCriteria, digitCriteria, uppercaseCriteria, lowercaseCriteria, specialCriteria].filter(Boolean).length;

    if (criteriaMet >= 4) {
        strength = "Strong";
    } else if (criteriaMet === 3) {
        strength = "Moderate";
    } else if (criteriaMet === 2) {
        strength = "Weak";
    }

    document.getElementById('strength').textContent = `Strength: ${strength}`;

    if (strength === "Weak" || strength === "Moderate") {
        const suggestion = generateRandomPassword();
        console.log(suggestion);
        document.getElementById('suggestion').textContent = `Suggested Password: ${suggestion}`
    } else {
        document.getElementById('suggestion').textContent = '';
    }
}

// Password suggestion function
function generateRandomPassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(),.?\":{}|<>";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Show/Hide password function
const showPass = () =>{
    var inpass = document.getElementById("passwordInput")
    if (inpass.type === "password"){
        inpass.type = "text"
    }
    else if(inpass.type === "text"){
        inpass.type = "password"
    }
    else{
        inpass.type = "password"
    }
}