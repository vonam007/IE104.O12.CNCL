function popup3seconds() {
    let popup = document.getElementById("IDpopup");
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
    setTimeout(function() {
        popup.innerHTML = originalContent;
    }, 1870);
}