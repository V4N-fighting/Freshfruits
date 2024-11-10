document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#image-slide', {
        type: 'loop',       // Chuyển đổi slide lặp lại
        perPage: 1,         // Số lượng slide hiển thị cùng một lúc
        autoplay: true,     // Tự động chuyển slide
        interval: 3000,     // Thời gian giữa các slide (ms)
        arrows: true,       // Hiển thị nút điều hướng trái và phải
        pagination: true 
        });
    splide.mount();
});




// client side routing js 
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "page/404.html",
    "/": "/pages/index.html",
    "/about": "pages/about.html",
    "/shop": "pages/shop.html",
    "contact": "pages/contact.html",
    "/blog": "pages/blog.html",
    "/gallery": "pages/gallery.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();




