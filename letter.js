document.onkeyup = function(event) {
	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	hangmanGame.updatePage(hangmanGame.letterGuessed);