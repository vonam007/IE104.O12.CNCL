
let paymentButton = document.getElementById("payment-btn");
paymentButton.addEventListener("click", showMethod);

function showMethod() {
    if (document.getElementById("payment-method").style.height == "auto") {
        document.getElementById("payment-method").style.height = "0";
        paymentButton.style.removeProperty("transform");
    } else {
        document.getElementById("payment-method").style.height = "auto";
        paymentButton.style.transform = "rotate(90deg)";
    }
}

const paymentSuccess = () => {
    window.location.href = "pay-success.html";
}