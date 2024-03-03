const SHOWPWD = document.querySelectorAll(".show-pwd");

SHOWPWD.forEach(symbol => {
    symbol.addEventListener("click", () => {
        let input = symbol.nextElementSibling;
        let currentType = input.getAttribute("type");
        currentType === "password" ? input.setAttribute("type", "text") : input.setAttribute("type", "password");
    })
})
