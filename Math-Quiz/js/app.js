var currentPlayerAge = '';
var currentPlayerName = '';

// Score for Level 1
var numberOfHitsLevel1 = 0;
var numberOfMissesLevel1 = 0;

// Score for Level 2
var numberOfHitsLevel2 = 0;
var numberOfMissesLevel2 = 0;

// Score for Level 3
var numberOfHitsLevel3 = 0;
var numberOfMissesLevel3 = 0;

// Report
var reportHitsLevel1 = document.getElementById('report-hits-level1');
var reportHitsLevel2 = document.getElementById('report-hits-level2');
var reportHitsLevel3 = document.getElementById('report-hits-level3');
var reportMissesLevel1 = document.getElementById('report-misses-level1');
var reportMissesLevel2 = document.getElementById('report-misses-level2');
var reportMissesLevel3 = document.getElementById('report-misses-level3');

// SUM
var numberHits = document.getElementById("number-hits");
var numberMiss = document.getElementById("number-miss");

// SUBS
var numberHits2 = document.getElementById("number-hits2");
var numberMiss2 = document.getElementById("number-miss2");

// DIV
var numberHits3 = document.getElementById("number-hits3");
var numberMiss3 = document.getElementById("number-miss3");

// Report
var reportInterface = document.getElementById("report-interface");
var username = document.getElementById("username");
var playerName = document.getElementById("player-name");
var playerAge = document.getElementById("player-age");

var introPage = document.getElementById('intro-page');
var startGame = document.getElementById('start-game');
var gameRules = document.getElementById('game-rules');
var welcomeInterface = document.getElementById('welcome-page');
var rulesInterface = document.getElementById('rules-page');
var username = document.getElementById('username');
var sumInterface = document.getElementById('sum-interface');
var playButton = document.getElementById('play-button');
var rulesPlayButton = document.getElementById('rules-play-button');
var additionTimer = document.getElementById('show-timer');

/* variables for Addition Interface */
var firstNumber = document.getElementById('first-number');
var secondNumber = document.getElementById('second-number');
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var number3 = document.getElementById('number3');
var number4 = document.getElementById('number4');
var number5 = document.getElementById('number5');
var number6 = document.getElementById('number6');
var number7 = document.getElementById('number7');
var number8 = document.getElementById('number8');
var number9 = document.getElementById('number9');

/* subtraction-interface */
var subtractionInterface = document.getElementById('substraction-interface');
var additionTimer2 = document.getElementById('show-timer2'); 
var firstNumberSub = document.getElementById('first-number-sub');
var secondNumberSub = document.getElementById('second-number-sub');
var number1Sub = document.getElementById('number1-sub');
var number2Sub = document.getElementById('number2-sub');
var number3Sub = document.getElementById('number3-sub');
var number4Sub = document.getElementById('number4-sub');
var number5Sub = document.getElementById('number5-sub');
var number6Sub = document.getElementById('number6-sub');
var number7Sub = document.getElementById('number7-sub');
var number8Sub = document.getElementById('number8-sub');
var number9Sub = document.getElementById('number9-sub');

/* divison-interface */
var divisionInterface = document.getElementById('division-interface');
var additionTimer3 = document.getElementById('show-timer3'); 
var firstNumberDiv = document.getElementById('first-number-div');
var secondNumberDiv = document.getElementById('second-number-div');
var number1Div = document.getElementById('number1-div');
var number2Div = document.getElementById('number2-div');
var number3Div = document.getElementById('number3-div');
var number4Div = document.getElementById('number4-div');
var number5Div = document.getElementById('number5-div');
var number6Div = document.getElementById('number6-div');
var number7Div = document.getElementById('number7-div');
var number8Div = document.getElementById('number8-div');
var number9Div = document.getElementById('number9-div');

/* User clicks on rules button */
gameRules.addEventListener("click", function(){
	introPage.style.display = "none";
	rulesInterface.style.display = "block";
	rulesPlayButton.addEventListener('click', function(){
		rulesInterface.style.display = "none";
		welcomeInterface.style.display = "block";
		playButton.addEventListener('click', function(){
			welcomeInterface.style.display = "none";
			showAdditionInterface();
		});
	});
}); 
// rulesPlayButton

/* User clicks on start game */
startGame.addEventListener('click', function(){
	introPage.style.display = "none";
	welcomeInterface.style.display = "block";
	playButton.addEventListener('click', function(){
	welcomeInterface.style.display = "none";
	showAdditionInterface();
	});
});

/* Showing FIRST Interface */
function showAdditionInterface(){
	sumInterface.style.display  = "block";
	numberHits.innerHTML = "HITS: " + 0;
	numberMiss.innerHTML = "MISS: "+ 0;
	currentTime = setInterval(printTime, 1000);
	function printTime(){
		additionTimer.innerHTML = 1 + (+additionTimer.innerHTML);
		if(+additionTimer.innerHTML === 90){
		  clearInterval(currentTime); 
		  showSubstractionInterface();
		}
	}	
	randomNumberGenerator();
}

/***************************** Functions to be used for Additon *****************************/ 
function randomNumberGenerator(){
	var firstRandomNumber = Math.floor(Math.random()*25) + 1; // This will generate random number from 1 to 25
	firstNumber.innerHTML = firstRandomNumber + " +";
	var secondRandomNumber = Math.floor(Math.random()*9) + 1; // This will generate random number from 1 to 9
	secondNumber.innerHTML = secondRandomNumber;
	var correctResult = firstRandomNumber + secondRandomNumber; // Correct answer

	// Checking correct result doesn't repeat
	var arr = [];
	for (var i = 0; i < 8; i++) {
		do {
		  num = Math.floor(Math.random() * 25) + 1;
		} while (num === correctResult);
		arr.push(num);
	  }

	for(var j = 1; j < 9; j++){
		var elementId= 'number' + j;
		document.getElementById(elementId).innerHTML = arr[j-1];
	}
	number9.innerHTML = correctResult;
	shuffle("container", "shuffleMe"); // Shuffling numbers on DOM
}

function getCorrectSumAnswer(el){
	if(+el.innerHTML === +number9.innerHTML){
		numberOfHitsLevel1++;
		//numberHits.innerHTML = "HITS: "+ points;
		numberHits.innerHTML = "HITS: " + numberOfHitsLevel1;
		// Now create new random numbers
		randomNumberGenerator();
	}else{
		numberOfHitsLevel1--;
		numberOfMissesLevel1++;
		if(numberOfMissesLevel1 === 6){
			alert("Game is over. You've been redirected to the welcome page ");
			location.reload();
		}

		if(numberOfHitsLevel1 < 0){
			numberOfHitsLevel1 = 0;
		}

		numberHits.innerHTML = "HITS: "+ numberOfHitsLevel1;
		numberMiss.innerHTML = "MISS: "+ numberOfMissesLevel1;
	}
}

/***************************** Functions to be used for Substraction *****************************/ 
/* Showing SECOND Interface */
function showSubstractionInterface(){
	sumInterface.style.display  = "none";
	subtractionInterface.style.display = "block";
	// numberHits2.innerHTML = "HITS: "+ points;
	// numberMiss2.innerHTML = "MISS: "+ miss;
	numberHits2.innerHTML = "HITS: "+ 0;
	numberMiss2.innerHTML = "MISS: "+ 0;
	var currentTime2 = setInterval(printTime2, 1000);
	function printTime2(){
		additionTimer2.innerHTML = 1 + (+additionTimer2.innerHTML);
		if(+additionTimer2.innerHTML === 120){
		  clearInterval(currentTime2); // Here go to next Level
		  showDivisionInterface();
		}
	}	
	randomNumberGeneratorForSubstraction();
}

function randomNumberGeneratorForSubstraction(){
	var firstRandomNumber = Math.floor(Math.random()*25) + 1; // This will generate random number from 1 to 25
	var secondRandomNumber = Math.floor(Math.random()*9) + 1; // This will generate random number from 1 to 9
	var correctResult = 0;

	// Keeping greate number always on the left side
	if(firstRandomNumber > secondRandomNumber){
		firstNumberSub.innerHTML = firstRandomNumber + " -";
		secondNumberSub.innerHTML = secondRandomNumber;
		correctResult = firstRandomNumber - secondRandomNumber; // Correct answer
	}else{
		firstNumberSub.innerHTML = secondRandomNumber + " -";
		secondNumberSub.innerHTML = firstRandomNumber;
		correctResult = secondRandomNumber - firstRandomNumber; // Correct answer
	}

	// Checking correct result doesn't repeat
	var arr = [];
	for (var i = 0; i < 8; i++) {
		do {
		  num = Math.floor(Math.random() * 25) + 1;
		} while (num === correctResult);
		arr.push(num);
	  }

	//console.log(arr);

	for(var j = 1; j < 9; j++){
		var elementId= 'number' + j + '-sub';
		document.getElementById(elementId).innerHTML = arr[j-1];
	}
	number9Sub.innerHTML = correctResult;
	shuffle("container2", "shuffleMe2"); // Shuffling numbers on DOM
}

function getCorrectSubAnswer(el){
	if(+el.innerHTML === +number9Sub.innerHTML){
		//points++;
		numberOfHitsLevel2++;
		// Now create new random numbers
		numberHits2.innerHTML = "HITS: "+ numberOfHitsLevel2;
		randomNumberGeneratorForSubstraction();
	}else{
		numberOfHitsLevel2--;
		numberOfMissesLevel2++;
		if(numberOfMissesLevel2 === 6){
			alert("Game is over because you missed 6 questions. You've been redirected to the welcome page ");
			location.reload();
		}

		if(numberOfHitsLevel2 < 0){
		  numberOfHitsLevel2 = 0;
		}
		numberHits2.innerHTML = "HITS: "+ numberOfHitsLevel2;
		numberMiss2.innerHTML = "MISS: "+ numberOfMissesLevel2;
	}
}

/**********************************************************************************************************/
/* Showing THIRD Interface */
function showDivisionInterface(){
	subtractionInterface.style.display  = "none";
	divisionInterface.style.display = "block";
	numberHits3.innerHTML = "HITS: "+ 0;
	numberMiss3.innerHTML = "MISS: "+ 0;
	var currentTime3 = setInterval(printTime3, 1000);
	function printTime3(){
		additionTimer3.innerHTML = 1 + (+additionTimer3.innerHTML);
		if(+additionTimer3.innerHTML === 150){
		  clearInterval(currentTime3); // End Of Game
		  divisionInterface.style.display = "none";
		  reportInterface.style.display = "block";
		  playerName.innerHTML = "Player's Name: " + currentPlayerName; // Showing Player's name
		  playerAge.innerHTML = "Player's Age: " + currentPlayerAge;

		  reportHitsLevel1.innerHTML = "HITS: "+ numberOfHitsLevel1;	
		  reportHitsLevel2.innerHTML = "HITS: "+ numberOfHitsLevel2;	
		  reportHitsLevel3.innerHTML = "HITS: "+ numberOfHitsLevel3;	
		  reportMissesLevel1.innerHTML = "MISSES: " + numberOfMissesLevel1;
		  reportMissesLevel2.innerHTML = "MISSES: " + numberOfMissesLevel2;	
		  reportMissesLevel3.innerHTML = "MISSES: " + numberOfMissesLevel3;
		}
	}	
	randomNumberGeneratorForDivision();
}

function randomNumberGeneratorForDivision(){
	var firstRandomNumber = Math.floor(Math.random()*25) + 1; // This will generate random number from 1 to 25
	var secondRandomNumber = Math.floor(Math.random()*9) + 1; // This will generate random number from 1 to 9
	var correctResult = 0;
	var arr = [];
	  do {
		var firstRandomNumber = Math.floor(Math.random()*25) + 1;
		var secondRandomNumber = Math.floor(Math.random()*9) + 1;
	  } while ((firstRandomNumber % secondRandomNumber !== 0));
	  //console.log('first', firstRandomNumber, 'second', secondRandomNumber);
	  arr.push(firstRandomNumber / secondRandomNumber);
	console.log(arr);
	correctResult = arr[0];

	firstNumberDiv.innerHTML = firstRandomNumber + " /";
	secondNumberDiv.innerHTML = secondRandomNumber;

	// Checking correct result doesn't repeat
	var arr = [];
	for (var i = 0; i < 8; i++) {
		do {
		  num = Math.floor(Math.random() * 25) + 1;
		} while (num === correctResult);
		arr.push(num);
	  }

	//console.log(arr);

	for(var j = 1; j < 9; j++){
		var elementId= 'number' + j + '-div';
		document.getElementById(elementId).innerHTML = arr[j-1];
	}
	number9Div.innerHTML = correctResult;
	shuffle("container3", "shuffleMe3"); // Shuffling numbers on DOM
}

function getCorrectDivisionAnswer(el){
	if(+el.innerHTML === +number9Div.innerHTML){
		// points++;
		numberOfHitsLevel3++;
		numberHits3.innerHTML = "HITS: "+ numberOfHitsLevel3;
		// Now create new random numbers
		randomNumberGeneratorForDivision();
		
	}else{
		numberOfHitsLevel3--;
		numberOfMissesLevel3++;
		if(numberOfMissesLevel3 === 6){
			alert("Game is over. You've been redirected to the welcome page ");
			location.reload();
		}
		
		if(numberOfHitsLevel3 < 0){
			numberOfHitsLevel3 = 0;
		}

		numberHits3.innerHTML = "HITS: "+ numberOfHitsLevel3;
		numberMiss3.innerHTML = "MISS: "+ numberOfMissesLevel3;
	}
}

/**********************************************************************************************************/
// Helper Functions

function shuffle(param1, param2) {
	if(param1 === "container"){
	   shuffleID = "container";
	}else if(param1 === "container2"){
		shuffleID = "container2";
	}else{
		shuffleID = "container3";
	}

	if(param2 === 'shuffleMe'){
		shuffleClassName = 'shuffleMe';
	 }else if(param2 === 'shuffleMe2'){
		shuffleClassName = 'shuffleMe2';
	 }else{
		shuffleClassName = 'shuffleMe3';
	 }

	var container = document.getElementById(shuffleID);
	var elementsArray = collectionToArray(container.getElementsByClassName(shuffleClassName));
	  elementsArray.forEach(function(element){
		container.removeChild(element);
	})
	shuffleArray(elementsArray);
	elementsArray.forEach(function(element){
	container.appendChild(element);
  })
  }
  
   function collectionToArray(collection) {
	var i;
	var arr = [];
	for (i = 0; i < collection.length; i++) {
	  arr.push(collection[i]);
	}
	return arr.slice();
  }
  
  function shuffleArray(array) {
	  for (var i = array.length - 1; i > 0; i--) {
		  var j = Math.floor(Math.random() * (i + 1));
		  var temp = array[i];
		  array[i] = array[j];
		  array[j] = temp;
	  }
	  return array;
  }

/* Selecting user's age */
function handleSelectChange(event) {
	var selectElement = event.target;
	var age = selectElement.value; // getting user's age	
	currentPlayerAge = age;
	currentPlayerName = username.value;	
}