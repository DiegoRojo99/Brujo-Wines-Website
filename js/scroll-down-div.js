$(document).scroll(function() {
    //Aparecen las botellas despues de 320px
    var y = $(this).scrollTop();
    if (y > 320) {
      $('.wine-preview').fadeIn(2000);
    } else {
      $('.wine-preview').fadeOut();
    }
});