$(document).ready(function(){
  $('header').fadeOut(3000);

  $('.china, .italy, .mexico').hide();

  $('.op-china').click(function(){
    $('img').hide();
    $('.china').fadeIn();
  });
  $('.op-italy').click(function(){
    $('img').hide();
    $('.italy').fadeIn();
  });
  $('.op-mexico').click(function(){
    $('img').hide();
    $('.mexico').fadeIn();
  });
  $('#miboton').click(function() {
    // Recargo la página
    location.reload();
});
});
