document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#image-slide', {
        type  : 'slide',
        rewind: true,
        speed: 500     // Tốc độ chuyển (ms), có thể tùy chỉnh cho mượt mà
        });
    splide.mount();
});
