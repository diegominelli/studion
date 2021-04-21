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

  $(".footer-form-button").on("click", () => {
    const email = $("#email").val();
    Email.send({
      Host: "smtp.yourisp.com",
      Username: "username",
      Password: "password",
      To: "them@website.com",
      From: email,
      Subject: "Pir favor me adicione na newslatter",
      Body: `Olá,

      Eu gostaria de ser adicionado na newslatter do site.
      Meu email é ${email}.
      
      Obrigado!
      `,
    }).then((message) => alert(message));
  });
});
