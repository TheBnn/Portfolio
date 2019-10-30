$(document).ready(function () {
  $(document).on('focus active', 'input', function () {
    $('label[for=' + $(this).attr('id') + ']').addClass('focus');
  });
  $(document).on('blur', 'input', function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $('label[for=' + $(this).attr('id') + ']').removeClass('focus');
    } else {
      $('label[for=' + $(this).attr('id') + ']').addClass('focus');
    }
  });
});