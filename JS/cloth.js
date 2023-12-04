itemContent = `
<div class="sec2-item-contain">
    <div class="sec2-item">
        <div class="sec2-item-img-contain">
            <img src="../src/images/product/ao.png" alt="">
        </div>
        <div class="sec2-item-info-contain">
            <div class="sec2-item-info">
                <div class="sec2-item-name">Áo Polo CS</div>
                <div class="sec2-item-description">Áo Polo có cổ</div>
                <div class="sec2-item-price">190.000 VND</div>
            </div>
        </div>
    </div>
    <i class='bx bxs-cart-add' onclick="popup3seconds()"></i>
</div>
`;

const itemList = document.getElementById("sec2-item-list");

for (let i = 0; i < 12; i++) {
    itemList.innerHTML += itemContent;
}