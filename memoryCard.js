//Creating the deck
// card match images, reflect values in the array 2 of each in deck
var cards = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]; //"images/Tiles/IMG_"
var deck = [];
var matches = 0;
// declare functions
function newDeck(){
  deck = cards.sort(shuffle);
}
function shuffle(){
	return 0.5 - Math.random();
}

//Start of game
	//Timer: New date object when start button is clicked, 
	//during the game setInterval at every second update the timer element
	//Subtract old date object, find the number of seconds passed and convert it
	//Display the number of seconds
	//Stop timer: Clear interval function


//Wrap entire game in a function, call the function(at the end) to start the game
function init(){
}
// when html page is finshed loading, run this
$(document).ready(function(){
  newDeck();
  //add event listener when the tiles are clicked using callback onTileClick
  $(".tile").click(onTileClick);
});
// declare this function
function flipCardOver(){
	// store all cards face-up into myCards - array of 2
	var myCards = $(".face-up")
	// look at first card and find value in the deck 
		var card1 = deck[myCards[0].id.substring(4)-1];
		//look at second card and find value in the deck
		var card2 = deck[myCards[1].id.substring(4)-1];
		// compare to see if they match
		if(card1 === card2){
			// if match, remove the face up class AND the tile class
			$(".face-up").removeClass("face-up tile");
			// change background image to display nothing 
			$(myCards).css('background','none');
			matches++;
			 //else statement if its not a match to change background image to show back of the card
			 // used .css to change the image 
			 // removed face-up class and add the face-down class
		}else{
			$(".face-up").css('background',"url('IMG_Back.png')");
			$(".face-up").removeClass("face-up").addClass("face-down");
		}
		if (matches>9){
			celebration();
		}
		else{
			// re-add the click event listener with .bind statement
		$(".tile").bind("click",onTileClick);
		}
}


// declare onTileClick function 

function onTileClick(){
	// removing card from id and take the substring of the identifier in index 4
	var i =$(this).attr('id').substring(4); 
	// subtracting 1 because using number to look in the array which begins at index 0
	i--;
		//On click remove face down class of tile and changes background to image file
	// then adds class face-up
	$(this).css('background',"url('./images/Tiles/IMG_"+deck[i]+".png')");
	$(this).removeClass("face-down").addClass("face-up");
	// when 1 is flipped over,do nothing until 2 are flipped over then run if statement 
	if($(".face-up").length>1){
		// remove the click listener from tiles
		// after 2.5 sec pause then run function flipCardOver
		$(".tile").unbind("click");
		setTimeout(flipCardOver,1000);
	}
		
  }

// Select Cards Function
// Click on one card, to show first card and then second clicked card to check for matches
	// onclick function (event listener) add flip class to see whether cards match


//function selectCard(){
			//if()
			//$(this).addClass("card-flipped")
		//}
			// do nothing if two cards are already flipped
			// card is visible true or false
			//check the pattern of both cards flipped 
			// set timeout for 10 seconds later
//}

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
function celebration(){
	    // if all cards = is solved then display (animation? and final photo) 
	    //in raw html/css first so image is on the page display none in css
	    //show it 
	restartGame();
}


function restartGame(){}
// End of game
	//Stop timer: Clear interval function
	//Display the date "Your time"
	//Display final photo and a pop up "Congratulations, 'name'!" 
			// * if API used here, check Firebase to check the scores against the top ranking and compare
	// "Press start to play again, 'name'!" restart game call setup function (Start of game)
