$(document).ready(function() {
   $("a").each.on("click",function(evt) {
      evt.preventDefault();
      $("#display").load("apple_btns.html");
   });
});
