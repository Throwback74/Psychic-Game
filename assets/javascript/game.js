// set the score, losses and guesses left to 0
var userScore = 0;
var userLosses = 0;
var userGuesses = 10;
// userChoices is a currently empty array that will be filled with the user's guesses as the rounds proceed
var userChoices = [];
// var letter = null;
// for(var uC = 0; uC <= userGuesses;  )

var targetDiv = document.getElementById("guessText").innerHTML = userChoices;

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
// when the user presses a letter on the keyboard...
document.onkeyup = function(event) {

    var letter = (event.key).toLowerCase();

    Array.prototype.push.apply(userChoices, letter);

    console.log(userChoices);

       var guessArray = function() {

            userChoices.push(letter);
            
            document.getElementById("guessText").innerHTML = function(){
            
            console.log(userChoices)

            guessArray(letter);
            };    
        };

    function myFunction(array) {

        for(var i = 0; i < array.length; i++) {
            document.write(array[i]);
        }
    }

myFunction(userChoices);
//make a function to reset the picker, up the score or losses and reset the guesses left once the user wins/loses

//make a function that adds each letter guessed to the empty array - userChoices



    // function random_character() {
      
    // userChoices = [];
    //   console.log(chars.substr( Math.floor(Math.random() * 24), 1));

    // };

}

    // if(letter === )