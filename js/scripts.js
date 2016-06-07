$(document).ready(function(){


  $('#count').submit(function(event){
    event.preventDefault();

    // NUMBER ADD
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

    // WORD PUZZLE -- HIDING THE VOWELS

  $('#quotePuzzle').submit(function(event){
    event.preventDefault();

    var quote = $("#quoteToPuzzle").val().toLowerCase().split([','[String.length]]);
    var newQuote = "";
    console.log(quote);
    for ( i=0; i < quote.length; i++ ){

      if (quote[i] === "a" || quote[i] === "e" || quote[i] === "i" || quote[i] === "o" || quote[i] === "u" ) {

          quote[i] = "-";

      } else {
        false;
      }
    }
    $(".container").children().toggle();
    newQuote = quote.join("");
    $("#output").append("<p>" + newQuote + "</p>");

    $("#showForm").click(function(){
      $(".container").children().toggle();
  });
});

    // PALINDROMES
    $('#palindromeTest').submit(function(event){
      event.preventDefault();

    var word = $("#potentialPalindrome").val().split([','[String.length]]);
    var wordReverse = word.slice().reverse();
    console.log(word);
    console.log(wordReverse);

    if (word.toString() === wordReverse.toString()) {
      alert("You have a palindrome!");
    } else {
      alert("Sorry, not a palindrome. Try again.");
    }
  });

    // PRIME FINDER

    $("#primeFinder").submit(function(event){
      event.preventDefault();

      var number = parseInt($("#primeInput").val());
      var primeNumbers = [];
      var cleanPrime = [];

      for (var counter = 0; counter <= number; counter++) {

          var notPrime = false;
          for (var i = 2; i <= counter; i++) {
              if (counter%i===0 && i!==counter) {
                  notPrime = true;
              }
          }
          if (notPrime === false && counter > 1) {
              primeNumbers.push(counter);
          }
      }
      console.log(primeNumbers);
      $("#primeOutput").show()

      for (k=0; k < primeNumbers.length; k++) {
         $("ul").append("<li>" + primeNumbers[k] + "</li>");
           }

    });

    //   ALTERNATE PRIME FINDER
    //   for (i=1; i <= number; i++) {
    //
    //     primeNumbers.push(i)
    //     for (iTwo = 1; iTwo <= primeNumbers.length; iTwo+=2) {
    //     if (primeNumbers[iTwo] % 2 === 0) {
    //     primeNumbers[iTwo] = "-";
    //     }
    //   }
    //     for (iThree = 2; iThree <= primeNumbers.length; iThree+=3) {
    //     if (primeNumbers[iThree] % 3 === 0) {
    //     primeNumbers[iThree] = "-";
    //     }
    //   }
    //   for (iFive = 4; iFive <= primeNumbers.length; iFive+=5) {
    //   if (primeNumbers[iFive] % 5 === 0) {
    //   primeNumbers[iFive] = "-";
    //   }
    //   }
    //   for (iSeven = 13; iSeven <= primeNumbers.length; iSeven+=7) {
    //   if (primeNumbers[iSeven] % 7 === 0) {
    //   primeNumbers[iSeven] = "-";
    //   }
    // }
    //   }
    //   console.log(primeNumbers);
    //
    //
    //
    //     for (j=0; j <= primeNumbers.length; j++) {
    //       if (primeNumbers[j] !== "-" && primeNumbers[j] !== 1) {
    //         cleanPrime.push(primeNumbers[j]);
    //         }
    //       }
    //       console.log(cleanPrime);
    //
    //       for (k=0; k <= cleanPrime.length; k++) {
    //         $("ul").append("<li>" + cleanPrime[k] + "</li>");
    //       }
    //
    // });

    // FACTORIAL OPERATOR

    $("#factor").submit(function(event){
      event.preventDefault();

      var number = parseInt($("#factorInput").val());
      var total = 1;
      // console.log(number);
      for (i=0 ; i < number; i++){
          total *= (number - i);
      }

      $("#factorialOutput").append(total);

    });
  });
