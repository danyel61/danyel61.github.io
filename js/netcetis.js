$( document ).ready(function() {
 $("#like1").click(function(){
      var likes = $("#reactions").text();
       likes++;
       $("#reactions1").text(likes);
   });

   $("#comment").click(function(){
       $("#comentario").toggle("slow");


       $("#like2").click(function(){
        var likes = $("#reactions").text();
         likes++;
         $("#reactions2").text(likes);
     });
  
     $("#comment2").click(function(){
         $("#comentario").toggle("slow");
    });
});