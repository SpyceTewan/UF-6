function updateGameOver(){
	fill(255);
	textSize(50);
	text("Game Over!", 60, 200);
	textSize(27);

	text("Score: " + lastScore, 90, 250);
	textSize(50);
	tryAgainText.enable();
}