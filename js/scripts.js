$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var name = $("input#name").val();

    $(".letterName").text(name);

    $("#letter").show();

    event.preventDefault();
  });
});
