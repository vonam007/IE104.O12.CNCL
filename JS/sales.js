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
                <div class="sec2-item-price"><span class="origin-price">190.000VND</span><span class="sales-price">100.000VND</span></div>
            </div>
        </div>
    </div>
    <i class='bx bxs-cart-add' onclick="popup3seconds()"></i>
</div>  
<div class="sec2-item-contain">
    <div class="sec2-item">
        <div class="sec2-item-img-contain">
            <img src="../src/images/product/day-deo.png" alt="">
        </div>
        <div class="sec2-item-info-contain">
            <div class="sec2-item-info">
                <div class="sec2-item-name">Áo Polo CS</div>
                <div class="sec2-item-description">Dây đeo cổ thời thượng</div>
                <div class="sec2-item-price"><span class="origin-price">190.000VND</span><span class="sales-price">100.000VND</span></div>
            </div>
        </div>
    </div>
    <i class='bx bxs-cart-add' onclick="popup3seconds()"></i>
</div>
<div class="sec2-item-contain">
    <div class="sec2-item">
        <div class="sec2-item-img-contain">
            <img src="../src/images/product/sticker.png" alt="">
        </div>
        <div class="sec2-item-info-contain">
            <div class="sec2-item-info">
                <div class="sec2-item-name">Hình Dán Meww</div>
                <div class="sec2-item-description">Hình dán mew mew nhí nhảnh</div>
                <div class="sec2-item-price"><span class="origin-price">20.000VND</span><span class="sales-price">10.000VND</span></div>
            </div>
        </div>
    </div>
    <i class='bx bxs-cart-add' onclick="popup3seconds()"></i>
</div>
<div class="sec2-item-contain">
    <div class="sec2-item">
        <div class="sec2-item-img-contain">
            <img src="../src/images/product/mockhoa.png" alt="">
        </div>
        <div class="sec2-item-info-contain">
            <div class="sec2-item-info">
                <div class="sec2-item-name">Móc Khoá CS</div>
                <div class="sec2-item-description">Móc khoá khoa KHMT trẻ trung</div>
                <div class="sec2-item-price"><span class="origin-price">20.000VND</span><span class="sales-price">10.000VND</span></div>
            </div>
        </div>
    </div>
    <i class='bx bxs-cart-add' onclick="popup3seconds()"></i>
</div>
<div class="sec2-item-contain">
    <div class="sec2-item">
        <div class="sec2-item-img-contain">
            <img src="../src/images/product/yoyo.png" alt="">
        </div>
        <div class="sec2-item-info-contain">
            <div class="sec2-item-info">
                <div class="sec2-item-name">Dây kéo YoYo CS</div>
                <div class="sec2-item-description">YoYo KHMT tiện lợi</div>
                <div class="sec2-item-price"><span class="origin-price">25.000VND</span><span class="sales-price">10.000VND</span></div>
            </div>
        </div>
    </div>
    <i class='bx bxs-cart-add' onclick="popup3seconds()"></i>
</div>
`;

const itemList = document.getElementById("sec2-item-list");

for (let i = 0; i < 4; i++) {
    itemList.innerHTML += itemContent;
}