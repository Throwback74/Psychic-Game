$( document ).ready(function() {
// set the score, losses and guesses left to 0
var userScore = 0;
var userLosses = 0;
var userGuesses = 10;
// userChoices is a currently empty array that will be filled with the user's guesses as the rounds proceed
var userChoices = [];
var letterNeeded = null;
// for(var uC = 0; uC <= userGuesses;  )
// document.getElementById('show_btn').onclick = function(e) {
//     alert(record);
// }
// chars is the array containing the alphabet
var chars = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p","q","r","s","t","u","v","w","x","y","z"
        ];
//have the computer choose a random number betwee 1 and 26 and convert it into a string
var compLtr = chars[Math.floor(Math.random() * chars.length)];
    console.log("Wins: " + userScore + "Losses: " + userLosses + "Guesses Left: " + userGuesses);

// var targetGuessT = $("#guessText").html();

var updateGuessesRemain = function() {
     $("#guessesLeft").html("Guesses Left: " + userGuesses);
    };
    //Not sure if this is right, need to check it - see if we need a .this
var updateLetterNeeded = function() {
     $(compLtr) = $(letterNeeded);
    };

var updateUserGuesses = function() {
    $("#guessText").html($(userChoices.join(', '))); 
    // $(userChoices).join(', ')
    //  $("#guessText").html(userChoices.join(", "));
    }

    var reset = function() {
        userGuesses = 10;
        userChoices = [];

        updateGuessesRemain();
        updateLetterNeeded();
        updateUserGuesses();
    }

    updateLetterNeeded();
    // when the user presses a letter on the keyboard...
    document.onkeyup = function(event) {

        var letter = String.fromCharCode(event.key).toLowerCase();
        userGuesses--;

        userChoices.push(letter);
        updateGuessesRemain();
        updateUserGuesses();

            if(userGuesses > 0) {
                if(letter == letterNeeded) {
                    userScore++;
                    $("#score").html("Wins: " + userScore);
                    $("#profX").attr("src", "assets/images/GoodJob.jpg");
                    reset();
                }
            }else if(userGuesses == 0) {
                userLosses++;
                $("#losses").html("Losses: " + userLosses);
                $("#profX").attr("src", "assets/images/Sorry.jpg");
                reset();
            }

    // var myFunction = function(array) {
//To make the image invisible - // $("#profX").style.display= "none";

    //     for(var i = 0; i < array.length; i++) {
    //         console.log(array[i]);
    //     }
    
    

    // var guessesMade = Array.prototype.push.apply(userChoices, letter);

    // console.log(guessesMade);

    // myFunction(userChoices);

    //    var guessArray = function() {

    //         userChoices.push(letter);
            
    //         document.getElementById("guessText").innerHTML = function(){
            
    //         console.log(userChoices)

    //         guessArray(letter);
    //         };    
    //     };
}
//make a function to reset the picker, up the score or losses and reset the guesses left once the user wins/loses

//make a function that adds each letter guessed to the empty array - userChoices



    // function random_character() {
      
    // userChoices = [];
    //   console.log(chars.substr( Math.floor(Math.random() * 24), 1));

    // };



    // if(letter === )
})