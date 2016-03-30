$(document).ready(function() {
  // var x = "300";
  // var y = [];
  //user interface logic
  $("form").submit(function(event) {
    event.preventDefault();

    var words = $("#words").val();
    $("#outputList").text(toPig(words));

    // $("#outputList").text(Regular_pigs(words));
  });

  //functions


  function Regular_pigs(iiii) {
    var input = iiii.trim().split(" ");
    //bad input,
    //capital letters
    //punctuation

    for (var i = 0; i < input.length; i++) {
      if (/^[aeiou]/.test(input[i])){  // input has vowel start
        input[i] = input[i] + "ay";
      } else if (/^[^aeiou]/.test(input[i])) { // input has consonant start
        input[i] = input[i].replace(/^[^aeiou]+/, "") + input[i].match(/^[^aeiou]+/) + "ay";
      }
    }
    return input.join(" ");
  }


  function toPig(iiii) {
    if (allString(iiii)) {
      // take string
      var input = iiii.trim().toLowerCase().split(" ");

      var vowels = ["a", "e", "i", "o", "u"];

      for (var i = 0; i < input.length; i++) {
        if (vowels.indexOf(input[i].charAt(0)) >= 0) {
          //if vowel  add "ay" to the end
          input[i] = input[i] + "ay";
        } else {
          //find number of consecutive cons at start
          var consIndex = 0; //do we need =0 ?
          while ((vowels.indexOf(input[i].charAt(consIndex)) === -1 || input[i].charAt(consIndex) === "u") && consIndex < input[i].length) {
            if (input[i].charAt(consIndex) === "u" && input[i].charAt(consIndex - 1) !== "q"){
              break
            }
            consIndex++;
          }
          //pull cons from start & put cons (+ "ay") at end
          var cons = input[i].substr(0, consIndex);
          input[i] = input[i].substr(consIndex, input[i].length) + cons + "ay";
        }
      }
      return input.join(" ");
    } else {
      return "enter words";
    }
  }

  function allString(i) {
    // test if not digits,
    var reg = /^\D+$/;
    return reg.test(i)
  }

});
