// Description: Main JS file for the website


// Header
// Header Nav
// Animation
let animationElement = document.getElementsByClassName('animation')[0];
let fileName = window.location.pathname.split("/").pop();
if (fileName == 'index.html') {
    animationElement.classList = 'animation start-home';
}
else if (fileName == 'cloth.html') {
    animationElement.classList = 'animation start-cloth';
}
else if (fileName == 'shoes.html') {
    animationElement.classList = 'animation start-shoes';
}
else if (fileName == 'sales.html') {
    animationElement.classList = 'animation start-sales';
}
else if (fileName == 'aboutus.html') {
    animationElement.classList = 'animation start-aboutus';
}
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