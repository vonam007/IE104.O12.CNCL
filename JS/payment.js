const paymentSuccess = () => {
    let SuccessAnnouncement = document.getElementById("payment-success");
    SuccessAnnouncement.style.display = "flex";
    CountDown();
    setTimeout(paymentEnd, 11000);
}
const paymentEnd = () => {
    let SuccessAnnouncement = document.getElementById("payment-success");
    SuccessAnnouncement.style.display = "none";
    window.location.href = "../index.html";
}

const CountDown = () => {
    let countDownSec = document.getElementById("countdown");
    var countDown = 11;
    setInterval(() => {
        countDown--;
        countDownSec.innerHTML = "(" + countDown + "s sau tự động chuyển về trang chủ)";
    }, 1000);
}


let paymentButton = document.getElementById("payment-btn");
paymentButton.addEventListener("click", showMethod);

function showMethod() {
    if (document.getElementById("payment-method").style.display == "block") {
        document.getElementById("payment-method").style.display = "none";
        paymentButton.style.removeProperty("transform");
    } else {
        document.getElementById("payment-method").style.display = "block";
        paymentButton.style.transform = "rotate(90deg)";
    }
}