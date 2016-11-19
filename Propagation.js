$(document).ready(function(){
  $(".icon-search").click(function(){
      $(".custom-search").addClass('show-form');
      $('#searchform input').focus();
  });
  $('body').click(function() {
     $(".custom-search").removeClass('show-form');
  });
  $("#searchform input").click(function(e){
      e.stopPropagation();
  });
  $(".icon-search").click(function(e){
      e.stopPropagation();
  });
});
