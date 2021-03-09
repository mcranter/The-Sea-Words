$(document).ready(function(){
    $('.sidenav').sidenav();
  });

//initialises text box resizing, add_word.html)
$('#textarea1').val('New Text');
M.textareaAutoResize($('#textarea1','#textarea2'));