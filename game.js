function(letter) {
		if (this.guessesLeft == 0){
			this.restartGame();
		}else{
			this.updateGuesses(letter);

			this.updateMatchedLetters(letter);

			this.rebuildWordView();

			if (this.updateWins() == true){
				this.restartGame();
			}
		}

	},
	updateGuesses: function(letter){
		//if the letter is not in the guessedLetters array
		//and
		//the letter is not in the lettersOfTheWord array
		//then
		//make guesses go down

		if ((this.guessedLetters.indexOf(letter) == -1) && (this.lettersOfTheWord.indexOf(letter) == -1)){
			
			this.guessedLetters.push(letter);

			this.guessesLeft--;

			document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;

			document.querySelector("#guessed-letters").innerHTML = this.guessedLetters.join(', ');
		}
	},
	processUpdateTotalGuesses: function() {
		this.totalGuesses = this.lettersOfTheWord.length + 5;
		this.guessesLeft = this.totalGuesses;

		// ---Render the guesses left
		document.querySelector('#guesses-remaining').innerHTML = this.guessesLeft;
	},
	updateMatchedLetters: function(letter){
		for (var i = 0; i < this.lettersOfTheWord.length; i++) {
			if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) == -1)){
				this.matchedLetters.push(letter);
			};
		};
	},
	rebuildWordView: function() {
		var wordView = "";

		for(var i=0; i < this.lettersOfTheWord.length; i++){
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) != -1){
				wordView += this.lettersOfTheWord[i];				
			}else{
				wordView += '&nbsp;_&nbsp;';
			}
		}