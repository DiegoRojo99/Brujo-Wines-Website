$(document).scroll(function() {
    //Aparecen las botellas despues de 320px
    var y = $(this).scrollTop();
    if (y > 300) {
      $('.wine-preview').fadeIn(2000);
    } else {
      $('.wine-preview').fadeOut();
    }
});