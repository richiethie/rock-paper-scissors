// define array for choices [r,p,s ]
var choice = ['R', 'P', 'S']
// define var for computerChoice
var robot = Math.floor(Math.random() * choice.length);
// define var for humanChoice
// var humanChoice = 
// define var for wins
// define var for losses
// define var for ties
var w = 0;
var l = 0;
var t = 0;

// prompt() humanChoice
var person = prompt('Enter R, P, or S:');
person = person.toUpperCase();
// randomly choose computerChoice
var robotChoice = alert("Computer chose:" + robot);

// compare choices
    // if humanChoice is p and computerChoice is r
        //
if (person === robotChoice) {
    alert("It's a tie!");
    t++;
} else if (
    (person === 'R' && robotChoice === 'S')
    (person === 'P' && robotChoice === 'R')
    (person === 'S' && robotChoice === 'P')
    ) {
    alert("You win!");
    w++;
} else {
    alert("You lost.");
    l++;
}
// display (alert) comparison results (won, tied, lost round)

// show stats (number of wins, losses, ties)

// ask to play again?
    // restart game
// else
    // end game