$(document).ready(function(){


  // $('#count').submit(function(event){
  //   event.preventDefault();

    // NUMBER ADD
    // var numberToCountTo = parseInt($('#countTo').val());
    // var numberToCountBy = parseInt($('#countBy').val());
    // var total = 0;
    // console.log(numberToCountTo);
    // console.log(numberToCountBy);
    //
    // if (isNaN(numberToCountBy) || isNaN(numberToCountTo)) {
    //   alert("Please enter a number");
    // } else if (numberToCountBy < 0 || numberToCountTo < 0) {
    //   alert("Please enter a positive number");
    // } else if (numberToCountBy > numberToCountTo) {
    //   alert("Please enter a larger number to count to");
    // } else {
    //
    //   for (i = numberToCountBy; i <= numberToCountTo; i+=numberToCountBy) {
    //       console.log(total += numberToCountBy);
    //   }
    // }

    // WORD PUZZLE -- HIDING THE VOWELS

    // $('#quotePuzzle').submit(function(event){
    //   event.preventDefault();

    // var quote = $("#quoteToPuzzle").val().toLowerCase().split([','[String.length]]);
    // var newQuote = "";
    // console.log(quote);
    // for ( i=0; i < quote.length; i++ ){
    //
    //   if (quote[i] === "a" || quote[i] === "e" || quote[i] === "i" || quote[i] === "o" || quote[i] === "u" ) {
    //
    //       quote[i] = "-";
    //
    //   } else {
    //     false;
    //   }
    // }
    // $(".container").children().toggle();
    // newQuote = quote.join("");
    // $("#output").append("<p>" + newQuote + "</p>");
    //
    // $("#showForm").click(function(){
    //   $(".container").children().toggle();

    // PALINDROMES
    // $('#palindromeTest').submit(function(event){
    //   event.preventDefault();
    //
    // var word = $("#potentialPalindrome").val().split([','[String.length]]);
    // var wordReverse = word.slice().reverse();
    // console.log(word);
    // console.log(wordReverse);
    //
    // if (word.toString() === wordReverse.toString()) {
    //   alert("You have a palindrome!");
    // } else {
    //   alert("Sorry, not a palindrome. Try again.");
    // }

    // PRIME FINDER

    // $("#primeFinder").submit(function(event){
    //   event.preventDefault();
    //
    //   var number = parseInt($("#primeInput").val());
    //   var primeNumbers = [];
    //
    //   for (var counter = 0; counter <= number; counter++) {
    //
    //       var notPrime = false;
    //       for (var i = 2; i <= counter; i++) {
    //           if (counter%i===0 && i!==counter) {
    //               notPrime = true;
    //           }
    //       }
    //       if (notPrime === false) {
    //           primeNumbers.push(counter);
    //       }
    //   }
    //
    //
    //
    //
    //  $("#output").append("<p>" + primeNumbers + "</p>");
    // });

    // FACTORIAL OPERATOR

    $("#factor").submit(function(event){
      event.preventDefault();

      var number = parseInt($("#factorInput").val());
      var total = 1;
      // console.log(number);
      for (i=0 ; i < number; i++){
          console.log(total *= (number - i));
      }
      
    });

    });
  // });
// });
