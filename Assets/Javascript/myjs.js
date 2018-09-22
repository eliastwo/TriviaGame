 
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
        },
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
        } 
      ]; 
		
		var trivia = {
		
		firedButton: "",
		playerScore: 0,
		timeLeft: 0,
		correctGuess: 0,
		incorrectGuess: 0,
		gameTimer: 0,
		randomItem: '',
		randomItemIndex: 0,
		selectQuestion: function() {
			trivia.randomItem = questions[Math.floor(Math.random()*questions.length)];

		},
		displayQuestion: function() {
			setTimeout(trivia.displayQuestion, 1000);
			document.getElementById("question").innerHTML = trivia.randomItem.question;
			document.getElementById("choice1").innerHTML  = trivia.randomItem.choices[0];
			document.getElementById("choice2").innerHTML  = trivia.randomItem.choices[1];
			document.getElementById("choice3").innerHTML  = trivia.randomItem.choices[2];
			document.getElementById("choice4").innerHTML  = trivia.randomItem.choices[3];
		},
		startTimer: function() {
				clearInterval(trivia.gameTimer);
				trivia.timeLeft = 15;
				document.getElementById("progressBar").value = 0;
				trivia.gameTimer = setInterval(function(){
				  document.getElementById("progressBar").value = 15 - --trivia.timeLeft;
				  if(trivia.timeLeft <= 0)
					clearInterval(trivia.gameTimer);
				},1000);
		}
		};
		
			$("button").click(function(event) {
				trivia.firedButton = $(this).val();
				
				trivia.selectQuestion();
				console.log(trivia.randomItem);
				console.log(questions.length);

				trivia.displayQuestion();
				trivia.startTimer();
				
				if(trivia.firedButton == trivia.randomItem.answer) {

					document.getElementById("status").innerHTML = "Correct Guess";
					trivia.correctGuess++;
					document.getElementById("correct").innerHTML = trivia.correctGuess;
				
					if(trivia.timeLeft >= 10) {
						trivia.playerScore = trivia.playerScore + 500;
						document.getElementById("score").innerHTML = trivia.playerScore;
					} else if(trivia.timeLeft < 10 && trivia.timeLeft >= 5) {
						trivia.playerScore = trivia.playerScore + 300;
						document.getElementById("score").innerHTML = trivia.playerScore;
					} else { 
						trivia.playerScore = trivia.playerScore + 300;
						document.getElementById("score").innerHTML = trivia.playerScore;
					};
				} 	else {
						trivia.incorrectGuess++;
						document.getElementById("status").innerHTML = "Guess was not correct";
						document.getElementById("incorrect").innerHTML = trivia.incorrectGuess;
				};
					clearInterval(trivia.gameTimer);
					questions.splice(trivia.randomItemIndex, 1);
					
			});
					

		

