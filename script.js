const SHOWPWD = document.querySelectorAll(".show-pwd");
const PASSWORD = document.querySelector("#password");
const PASSOWRDREPEAT = document.querySelector("#password-confirmation")

SHOWPWD.forEach(symbol => {
    symbol.addEventListener("click", () => {
        let input = symbol.nextElementSibling;
        let currentType = input.getAttribute("type");
        currentType === "password" ? input.setAttribute("type", "text") : input.setAttribute("type", "password");
    })
})

//mdp equivalent

function validatePassword() {
    if (PASSWORD.value != PASSOWRDREPEAT.value) {
        PASSOWRDREPEAT.setCustomValidity("Please enter the same password")
    } else {
        PASSOWRDREPEAT.setCustomValidity("")
    }
}
PASSWORD.addEventListener("keyup", validatePassword);
PASSOWRDREPEAT.addEventListener("keyup", validatePassword);