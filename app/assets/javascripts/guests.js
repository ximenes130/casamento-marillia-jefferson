// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {
  var gestRequestPromisse;
  $('#guest_name').on('keyup', function(){
    let name = document.getElementById('guest_name').value;
    if(gestRequestPromisse){
      clearInterval(gestRequestPromisse);
    }
    gestRequestPromisse = setTimeout(function(){
      $.get('guests',{
        format: 'js',
        guest: {
          name: name
        }
      });
    },300);
  });
});