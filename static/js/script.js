$(document).ready(function(){
    $('.sidenav').sidenav();
  });

//initialises text box resizing, add_word.html)
$('#textarea1').val('New Text');
    M.textareaAutoResize($('#textarea1','#textarea2'));

//pop up to confirm delete
// var delete_word;
// function sure() {
//     if (confirm("Sure you want to delete this word?")) {

//     } else {
//         delete_word = "You pressed Cancel!";
//     }
//     document.getElementById("del_wrd").innerHTML = delete_word;
//     }
// sure()

