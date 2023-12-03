document.addEventListener("DOMContentLoaded", function() {
    //
    // Mở bảng size
    //
    document.getElementById("toggle-size").addEventListener("click", function() {
      document.querySelector(".size-ao").style.display = "block";
    });
   
    const minusButton = document.getElementById("minus");
    const plusButton = document.getElementById("plus");
    const numberButton = document.getElementById("number");

    //
    // Đóng bảng size
    //

    // Định nghĩa sự kiện khi nhấn nút trừ
    minusButton.addEventListener("click", function() {
      let number = parseInt(numberButton.textContent);
      number--;
      numberButton.textContent = number;
    });

    //
    // Cộng trừ số lượng
    //

    // Định nghĩa sự kiện khi nhấn nút cộng
    plusButton.addEventListener("click", function() {
      let number = parseInt(numberButton.textContent);
      number++;
      numberButton.textContent = number;
    });

    const yellorButton = document.getElementById("yellor");
    const blueButton = document.getElementById("blue");
    const greenButton = document.getElementById("green");
    const disColor = document.getElementById("dis-color");

    //
    // Chọn màu cho sản phẩm
    //

    // Định nghĩa sự kiện khi nhấn nút yellor
    yellorButton.addEventListener("click", function() {
    disColor.textContent = "vàng chanh";
    });

    // Định nghĩa sự kiện khi nhấn nút blue
    blueButton.addEventListener("click", function() {
    disColor.textContent = "xanh biển";
    });

    // Định nghĩa sự kiện khi nhấn nút green
    greenButton.addEventListener("click", function() {
    disColor.textContent = "xanh lá nhạt";
    });
    
    // Định nghĩa sự kiện khi nhấn nút yellor
    yellorButton.addEventListener("click", function() {
      yellorButton.classList.add("selected");
      blueButton.classList.remove("selected");
      greenButton.classList.remove("selected");
    });
    
    // Định nghĩa sự kiện khi nhấn nút blue
    blueButton.addEventListener("click", function() {
      yellorButton.classList.remove("selected");
      blueButton.classList.add("selected");
      greenButton.classList.remove("selected");
    });
    
    // Định nghĩa sự kiện khi nhấn nút green
    greenButton.addEventListener("click", function() {
      yellorButton.classList.remove("selected");
      blueButton.classList.remove("selected");
      greenButton.classList.add("selected");
    });

    //
    // Chọn size
    //

    const sizeButtons = document.querySelectorAll(".size-button");

    sizeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        sizeButtons.forEach(function(btn) {
        btn.classList.remove("selected");
        });
        button.classList.add("selected");
    });
    });


    // di chuyển

});

document.addEventListener("DOMContentLoaded", function() {
    var scrollContainer1 = document.getElementById("sec4-item-container");
    var scrollLeftButton1 = document.getElementById("scroll-left1");
    var scrollRightButton1 = document.getElementById("scroll-right1");
  
    // Scroll sang trái
    scrollLeftButton1.addEventListener("click", function() {
      scrollContainer1.scrollLeft -= 1000; // Điều chỉnh giá trị theo ý muốn
    });
  
    // Scroll sang phải
    scrollRightButton1.addEventListener("click", function() {
      scrollContainer1.scrollLeft += 1000; // Điều chỉnh giá trị theo ý muốn
    });
  });
  function closeSizeAo() {
    document.querySelector(".size-ao").style.display = "none";
  }