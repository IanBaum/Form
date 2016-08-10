var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function(){
  $("#blanks form").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();

    $(".letterName").text(name);

    $("#letter").show();
  });

  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    
    alert(add(number1, number2));
  });

});
