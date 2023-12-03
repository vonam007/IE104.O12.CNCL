// Description: Main JS file for the website


// Header

// Header Subnav
// Search Button    
let searchBtn = document.getElementById('search-btn');
let searchInput = document.getElementById('search-input');
let searchBox = document.getElementById('search-box');
let headerSubnav = document.getElementsByClassName('header-subnav')[0];
let searchFlag = 0;
searchBtn.addEventListener('click', () => {
    if (searchFlag == 0) {
        searchInput.style.display = 'inline-block';
        searchBox.style.backgroundColor = 'white';
        searchBox.style.padding = '5px 10px 0 10px';
        headerSubnav.style.marginTop = '13px';
        searchFlag = 1;
    } else {
        searchInput.style.display = 'none';
        searchBox.style.backgroundColor = 'transparent';
        searchBox.style.padding = '0';
        headerSubnav.style.marginTop = '18px';
        searchFlag = 0;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".sec2-item");

    const handleClick = (event) => {
        // Your function here
        window.location.href = "cloth_1.html";
        console.log("Item clicked", event.target);
    };

    items.forEach(item => {
        item.addEventListener("click", handleClick);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".minicart-item");

    const handleClick = (event) => {
        // Your function here
        window.location.href = "cloth_1.html";
        console.log("Item clicked", event.target);
    };

    items.forEach(item => {
        item.addEventListener("click", handleClick);
    });
});
