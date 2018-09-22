
 var questions = 
      [
        {
          question: "What is the capital of Italy?",
          choices: ["Rome", "Milan", "Naples", "Florence"],
          answer: 0
        },
		{
          question: "What is the capital of Argentina?",
          choices: ["Rosario", "Buenos Aires", "Salta", "Mendoza"],
          answer: 1
        }
/* 		
        {
          question: "What is the capital of Australia?",
          choices: ["Canberra", "Melbourne", "Sydney", "Perth"],
          answer: 1
        },
		{
          question: "What is the capital of Canada?",
          choices: ["Montreal", "Calgary", "Winnipeg", "Ottawa"],
          answer: 3
        },
		{
          question: "What is the capital of China?",
          choices: ["Shanghai", "Guangzhou", "Beijing", "Shenzhen"],
          answer: 2
        },
		{
          question: "What is the capital of Egypt?",
          choices: ["Alexandria", "Cairo", "Suez", "Giza"],
          answer: 1
        },
		{
          question: "What is the capital of Germany?",
          choices: ["Frankfurt", "Hamburg", "Cologne", "Berlin"],
          answer: 3
        },
		{
          question: "What is the capital of India?",
          choices: ["Mumbai", "Chennai", "New Delhi", "Pune"],
          answer: 2
        },
		{
          question: "What is the capital of Japan?",
          choices: ["Hiroshima", "Tokyo", "Kobe", "Osaka"],
          answer: 1
        },
		{
          question: "What is the capital of Lebanon?",
          choices: ["Tire", "Sidon", "Tripoli", "Beirut"],
          answer: 3
        },
		{
          question: "What is the capital of Mexico?",
          choices: ["Cancun", "Monterrey", "Mexico City", "Guadalahara"],
          answer: 2
        },
		{
          question: "What is the capital of Norway?",
          choices: ["Bergen", "Oslo", "Drammen", "Tromso"],
          answer: 1
        } */
      ]; 
	
	  //I make another array and then copy the values of the original array into the cop
		var questions1 = questions;
		
		var firedButton = "";
		var playerScore = 0;
		var timeLeft = 0;
		var correctGuess = 0;
		var inCorrectGuess = 0;
		var gameTimer = 0;
		var randomItem = '';
		
		function selectQuestion() {

			console.log("selectQuestion called");
			randomItem = questions[Math.floor(Math.random()*questions.length)];
			document.getElementById("question").innerHTML = randomItem.question;
			document.getElementById("choice1").innerHTML  = randomItem.choices[0];
			document.getElementById("choice2").innerHTML  = randomItem.choices[1];
			document.getElementById("choice3").innerHTML  = randomItem.choices[2];
			document.getElementById("choice4").innerHTML  = randomItem.choices[3];
			
			console.log(randomItem);
			questions.splice(randomItem, 1);
			console.log("executed splice");
			return;
		};
		
		function playGame() {
			
			//logic to randomly select a question from the questions1 array
			
			console.log("playGame called");
			
			selectQuestion();

			$("button").click(function() {
			firedButton = $(this).val();
			
				if(firedButton == randomItem.answer) {
				
					console.log(timeLeft);
					document.getElementById("status").innerHTML = "Correct Guess";
					correctGuess++;
				
					if(timeLeft >= 10) {
						playerScore = playerScore + 500;
						document.getElementById("score").innerHTML = playerScore;
						return;
					} else if(timeLeft < 10 && timeLeft >= 5) {
						playerScore = playerScore + 300;
						document.getElementById("score").innerHTML = playerScore;
						return;
					} else { 
						playerScore = playerScore + 300;
						document.getElementById("score").innerHTML = playerScore;
						return;
					};
				};
/* 				else {
					inCorrectGuess++;
					document.getElementById("status").innerHTML = "Guess was not correct";
					clearInterval(gameTimer);
					return;
				}; */

			});
			
		};
		
		for(var i = 0; i < questions.length; i++) {
			//reset game variables
			console.log("for loop entered");
			timeLeft = 15;
			clearInterval(gameTimer);
			
//			selectQuestion();

			//This creates the progress bar that limits the amount of time the player has to answer the question
			var gameTimer = setInterval(function(){
			  document.getElementById("progressBar").value = 15 - --timeLeft;
			  if(timeLeft <= 0)
				clearInterval(gameTimer);
			},1000);
			
			//call game function
			playGame();
		};

