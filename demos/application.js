$(function() {

  $('#switch-me').switchy();

  $('.gender').on('click', function(){
    $('#switch-me').val($(this).attr('gender'));
    $('#switch-me').trigger('change');
  });

  $('#switch-me').on('change', function(){
    var bgColor = '#ccb3dc';
    if ($(this).val() == 'female'){
      bgColor = '#ed7ab0';
    } else if ($(this).val() == 'male'){
      bgColor = '#7fcbea';
    }
    $('.switchy-bar').animate({
      backgroundColor: bgColor
    });
  });
});