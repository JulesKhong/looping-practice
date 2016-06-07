$(document).ready(function(){

  $('#count').submit(function(event){
    event.preventDefault();

    var numberToCountTo = parseInt($('#countTo').val());
    var numberToCountBy = parseInt($('#countBy').val());
    var total = 0;
    console.log(numberToCountTo);
    console.log(numberToCountBy);

    if (isNaN(numberToCountBy) || isNaN(numberToCountTo)) {
      alert("Please enter a number");
    } else if (numberToCountBy < 0 || numberToCountTo < 0) {
      alert("Please enter a positive number");
    } else if (numberToCountBy > numberToCountTo) {
      alert("Please enter a larger number to count to");
    } else {

      for (i = numberToCountBy; i <= numberToCountTo; i+=numberToCountBy) {
          console.log(total += numberToCountBy);
      }
    }


  });
});
