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
        Lưu thành công!
    </div>  
    </div>
    `;
    setTimeout(function () {
        popup.innerHTML = originalContent;
    }, 1880);
}


let changeAvatar = document.getElementById("change-avatar");
let avatar = document.getElementById("avatar");
let avatarInput = document.getElementById("input-file");

changeAvatar.addEventListener("click", function () {
    avatarInput.click();
});

avatarInput.addEventListener("change", function () {
    let file = this.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function () {
            let result = reader.result;
            avatar.src = result;
        };
        reader.readAsDataURL(file);
    }
});