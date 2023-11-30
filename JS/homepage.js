console.log("homepage.js loaded");

// Path: JS/homepage.js
document.addEventListener("DOMContentLoaded", function() {
    var scrollContainer = document.getElementById("sec2-item-container");
    var scrollLeftButton = document.getElementById("scroll-left");
    var scrollRightButton = document.getElementById("scroll-right");
  
    // Scroll sang trái
    scrollLeftButton.addEventListener("click", function() {
      scrollContainer.scrollLeft -= 660; // Điều chỉnh giá trị theo ý muốn
    });
  
    // Scroll sang phải
    scrollRightButton.addEventListener("click", function() {
      scrollContainer.scrollLeft += 660; // Điều chỉnh giá trị theo ý muốn
    });
  });