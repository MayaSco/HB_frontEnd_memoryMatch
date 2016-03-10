//Creating the deck
var cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]; //"images/Tiles/IMG_"
var deck = [];
function newDeck(){
  deck = cards.sort(shuffle);
}
function shuffle(){
	return 0.5 - Math.random();
}
$(document).ready(function(){
  newDeck();
  $(".tile").click(function(e){
	var i =$(this).attr('id').substring(4); 
	i--;
	//On click remove face down class
	$(this).css('background',"url('./images/Tiles/IMG_"+deck[i]+".png')");
  });

});

//On click remove face down class
//Var with array of tiles = [];
//Wrap entire game in a function, call the function(at the end) to start the game

//Start of game
	//Timer: New date object when start button is clicked, 
	//during the game setInterval at every second update the timer element
	//Subtract old date object, find the number of seconds passed and convert it
	//Display the number of seconds
	//Stop timer: Clear interval function

//Shuffle cards function (Fischer-Yates)	
/*function shuffle(array) {
  var counter = array.length, temp, index;
	//  While there are elements in the array 
	while (counter>0) {
	//  pick a random index  
		index = Math.floor(Math.random() * counter);
		//decrease counter by 1
		counter --;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
   },*/


// Select Cards Function
// Click on one card, to show first card and then second clicked card to check for matches
	// onclick function (event listener) add flip class to see whether cards match
function selectCard(){
			// do nothing if two cards are already flipped
			// card is visible true or false
			//check the pattern of both cards flipped 
			// set timeout for 10 seconds later
}

// Check Cards for Match
function checkCard(){
	//convert which card was clicked into an array indice to see if its the same
			// match is solved true or false 
			//check to see if cards are a match, if pattern is the same, remove is solved cards from board
	// set to null     ==null to clear last card clicked to reset to first card clicked
}

//Remove any matched cards from the board
function RemoveMatch(){

	//keep tally how many times removeMatch happens
	//check to see if removeMatch variable tally<9 if so remove card only otherwise remove card and end game
}

// When all cards are matched
function celebration(){}
    // if all cards = is solved then display (animation? and final photo) 

function restartGame(){}
// End of game
	//Stop timer: Clear interval function
	//Display the date "Your time"
	//Display final photo and a pop up "Congratulations, 'name'!" 
			// * if API used here, check Firebase to check the scores against the top ranking and compare
	// "Press start to play again, 'name'!" restart game call setup function (Start of game)
