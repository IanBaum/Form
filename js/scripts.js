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

var action = 0;


$(document).ready(function(){

  $("#add").click(function(){
    action = 0;
  });

  $("#subtract").click(function(){
    action = 1;
  });

  $("#multiply").click(function(){
    action = 2;
  });

  $("#divide").click(function(){
    action = 3;
  });

  $("#blanks form").submit(function(event){
    event.preventDefault();

    var drink = $("input:radio[name=drink]:checked").val();

    var coding = $("#coding").val();

    var birthday = $("#birthday").val();

    var favoriteColor = $("#color").val();

    var name = $("input#name").val();

    $("#birthdayOut").text(birthday);

    $("#drinkOut").text(drink);

    $("#codingOut").text(coding);

    $(".letterName").text(name);

    $(".userData").css("color", favoriteColor);

    $("#letter").show();
  });

  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    if(action === 0){
      $("#output").text(add(number1, number2));
    }else if(action === 1){
      $("#output").text(subtract(number1,number2));
    }else if(action === 2){
      $("#output").text(multiply(number1,number2));
    }else{
      $("#output").text(divide(number1,number2));
    }
  });

});
