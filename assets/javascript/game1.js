
//set up variables for band array, alphabet as prerequisite valid guess, other necessary variables


var bands = ["Nirvana", 
            "Soundgarden", 
            "Pearl Jam", 
            "Stone Temple Pilots", 
            "Smashing Pumpkins", 
            "Alice in Chains", 
            "Temple of the Dog", 
            "Bush",
            "Hole",
                    ];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var gameStarted = false;
var currentWord;
var wordAsDashes;
var guessesLeft;
var lettersGuessed;
var winCount = 0;
var lossCount = 0;
var getNewWord;
var bandSelection; 
var correctGuesses;
var wordAsArr = [];
var dashesArray = [];

//set up function to start the game
// set up function to select a band from the array

// set up a function to turn the word into a series of dashes

function startGame() {
	
	lettersGuessed = [];
	correctGuesses = 0;
	wordPlace = Math.floor(Math.random() * bands.length);
	currentWord = bands[bandSelection];		
	guessesLeft = 6			
	document.getElementById("currentWord").innerHTML = wordDashes;
	document.getElementById("guesses").innerHTML = "--";
	document.getElementById("guess-count").innerHTML = guessesLeft;
}


//set up function to turn the word into a series of dashes

// set up a function to turn the word into a series of dashes

wordDashes = makeIntoDashes(currentWord);

function makeIntoDashes(word) {
    var dashes = "";
    for (i = 0; i <word.length -1; i++) {
        dashes += "_ ";
    }
    dashes += "_"
    return dashes;
    }
