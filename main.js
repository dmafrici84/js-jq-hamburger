// // PRIMO METODO. Utilizzo la classe presente nel css
// // al click sull'icona del menu-hamburger si vede il menu
// $(".header-right > a").click(
//   function() {
//     $(".hamburger-menu").addClass("active");
//   }
// );
//
// // al click sulla X scompare il menu
// $(".close").click(
//   function() {
//     $(".hamburger-menu").removeClass("active");
//   }
// );

// SECONDO METODO.Utilizzo la classe presente nel css ma cambio il modo di richiamere i tag dell' html
$("div.header-right > a").click(
  function() {
    $("header > div:last-child").addClass("active");
  }
);

// al click sulla X scompare il menu
$("div.hamburger-menu > a").click(
  function() {
    $("header > div:last-child").removeClass("active");
  }
);


// TERZO METODO. Utilizzo .show e .hide
// // al click sull'icona del menu-hamburger si vede il menu
// $(".header-right > a").click(
//   function() {
//     $(".hamburger-menu").show(500);
//   }
// );
//
// // al click sulla X scompare il menu
// $(".close").click(
//   function() {
//     $(".hamburger-menu").hide(500);
//   }
// );
