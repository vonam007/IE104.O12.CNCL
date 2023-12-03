document.body.appendChild(document.createElement("div")).id = "IDpopup";

function popup3seconds() {
    console.log("isclick");
    let popup = document.getElementById("IDpopup");
    console.log(popup);
    let originalContent = popup.innerHTML;
    popup.innerHTML = `
    <div class="popup_container">
    <div class="popup_image">
        <div class="popup_img"></div>
    </div>
    <div class="popup_text">
        Thêm vào giỏ hàng thành công!
    </div>  
    </div>
    `;
    setTimeout(function () {
        popup.innerHTML = originalContent;
    }, 1880);
}