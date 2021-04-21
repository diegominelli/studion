$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider-prev-arrow">Previous</button>',
    nextArrow:
      '<button type="button" class="slick-next slider-next-arrow">Next</button>',
  };
  $(".slider").slick(slickOptions);
});
