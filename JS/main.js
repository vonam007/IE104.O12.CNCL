// Description: Main JS file for the website

// Load HTML content from a file into a specific element
const loadHTML = (path, elementId) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Đọc xong nội dung, nhúng vào phần tử với id "footerContainer"
            document.getElementById(elementId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
};

// Run this function once when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Your code here
    console.log('Page loaded');
    // add footer content to the page
    loadHTML('footer/footer.html', 'footer-container');
    console.log('Footer loaded');
    // add header content to the page
    loadHTML('header/header.html', 'header-container');
    console.log('Header loaded');
});
