//Creating the deck
// card match images, reflect values in the array 2 of each in deck
var cards = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]; //"images/Tiles/IMG_"
var deck = [];
var matches = 0;
var time = 0;
var running = false;
// declare functions
function newDeck(){
  deck = cards.sort(shuffle);
}
function shuffle(){
	return 0.5 - Math.random();
}
//Start of game
function init(){
	// console.log("init function now!");
	newDeck();
  	$(".tile").hide("fast");
  	$(".start-button").click(function(){
  	$("#group-shot").fadeOut(500);
	$(".tile").show(2000);

	if(running){
		$(".tile").unbind("click");
		running = false;
		$(".start-button").html("Start");
	}else{
		$(".tile").click(onTileClick);
		running=true;
		$(".start-button").html("Stop");
		timer();
		}
	});
  //add event listener when the tiles are clicked using callback onTileClick
  
}

//Wrap entire game in a function, call the function(at the end) to start the game

	// var time = 0;
	// timer();
function timer(){
	//Timer uses global variable time set to zero and continually addes 1 second to its time when start button is activated 
	//Display the number of seconds
	$("#timer-display").html(time);
	time++;
	if (running)
		// use variable for setTimeout method
		myVar = setTimeout(timer,1400);
}

// when html page is finshed loading, run this
$(document).ready(function(){
	init();	
  // newDeck();
 //  $(".tile").hide("fast");
 //  $(".start-button").click(function(){
 //  	$("#group-shot").fadeOut(500);
	// $(".tile").show(2200);

	// if(running){
	// 	$(".tile").unbind("click");
	// 	running = false;
	// 	$(".start-button").html("Start");
	// }else{
	// 	$(".tile").click(onTileClick);
	// 	running=true;
	// 	$(".start-button").html("Stop");
	// 	timer();
	// 	}
	// });
 //  //add event listener when the tiles are clicked using callback onTileClick
  
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
			$("#points-display").html(matches);
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
// When all cards are matched
function celebration(){
	    // if all cards = is solved then display (animation? and final photo) 
	    //in raw html/css first so image is on the page display none in css
	    //show it with a slow fade in
	    $("#group-silly").fadeIn("slow");
	    // stop timer using variable 
	    clearTimeout(myVar);
	    $(".start-button").html("Play again");
	    // call restartGame function
		restartGame();
}

function restartGame(){
// End of game
	// time=0;
	// matches=0;
	// $("#points-display").html(matches);
	// running=false;
	// 	$(".start-button").click(function(){
	// 	$("#group-silly").hide("fast");
	// 		newDeck();
	// 		console.log("hey");
	// Give face-down class to tile again and give background image
	// 	$(".tile card face-down").show(1000);
	// if(running){
	// 	$(".tile").unbind("click");
	// 	running = false;
	// 	$(".start-button").html("Start");
	// }else{
	// 	$(".tile").click(onTileClick);
	// 	running=true;
	// 	$(".start-button").html("Stop");
	// 	timer();
	// 	}		
		// });
 	location.reload();
	//Display the date "Your time"
	//Display final photo and a pop up "Congratulations, 'name'!" 
			// * if API used here, check Firebase to check the scores against the top ranking and compare
	// "Press start to play again, 'name'!" restart game call setup function (Start of game)
	// init();
}