function showMessage() {
    alert("Welcome to SIVAS SHOPPING!");
}

let buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product Added to Cart!");
    });
});
