

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

// splide invesment

document.addEventListener('DOMContentLoaded', function () {
    var splideInvesment = new Splide( '#invesment', {
        type   : 'loop',
        perPage: 5,
        perMove: 1,
        autoplay  : true,      
        interval  : 1000, 
      } );
      
      splideInvesment.mount();
});

// document.addEventListener('DOMContentLoaded', function () {
//     var splideInvesment = new Splide('#invesment', {
//       type      : 'loop',    // Slide chạy liên tục
//       autoplay  : true,      // Bật tự động phát
//       interval  : 3000,      // Thời gian giữa các slide là 3 giây
//       pauseOnHover: false,   // Không dừng khi hover
//       perPage   : 5,         // Hiển thị 3 slide một lúc
//       gap       : '1rem',    // Khoảng cách giữa các slide
//       arrows    : true,      // Hiển thị mũi tên điều hướng
//     });

//     splideInvesment.mount();
//   });


// splide blog
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '#blog', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoplay  : true,      
        interval  : 1000, 
      } );
      
      splide.mount();
});


