var w = 0;
var l = 0;
var t = 0;

var choice = ['R', 'P', 'S']

var game = function() {
    // define array for choices [r,p,s ]

    // define var for computerChoice
    var robot = Math.floor(Math.random() * choice.length);
    var robotChoice = choice[robot];
    // define var for humanChoice
    // var humanChoice = 
    // define var for wins
    // define var for losses
    // define var for ties


    // prompt() humanChoice
    var person = prompt('Enter R, P, or S:');
    person = person.toUpperCase();
    // randomly choose computerChoice
    alert("Computer chose: " + robotChoice);

    // compare choices
        // if humanChoice is p and computerChoice is r
            //
    if (person === robotChoice) {
        alert("It's a tie!");
        t++;
    } else if (
        person === 'R' && robotChoice === 'S' ||
        person === 'P' && robotChoice === 'R' ||
        person === 'S' && robotChoice === 'P'
        ) {
        alert("You win!");
        w++;
    } else {
        alert("You lost.");
        l++;
    }
    // display (alert) comparison results (won, tied, lost round)

    // show stats (number of wins, losses, ties)
    alert("Stats: \n Wins: " + w + "\n Losses: " + l + "\n Ties: " + t);
    // ask to play again?
    var playAgain = confirm("Play Again?");
    if (playAgain) {
        game();
    }
        // restart game
    // else
        // end game
}
game()