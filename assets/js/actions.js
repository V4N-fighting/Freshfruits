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

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '#test', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        height: '3'
      } );
      
      splide.mount();
});

