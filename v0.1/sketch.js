// ASSETS
var font;
var enemyImage;
var playerImage;
var ballImage;

// MAIN GAME
var player;
var bullets;
var enemies;
var enemyInterval;
var enemyIntervalCurrent;
var score;
var ammo;
var mode;

// GAME OVER
var lastScore;
var tryAgainText;

function preload(){
	font = loadFont("PressStart2P-Regular.ttf");			// Loads font
	enemyImage = loadImage("sprites/enemy.png");			// Loads enemy sprite
	playerImage = loadImage("sprites/player.png");			// Loads player sprite
	ballImage = loadImage("sprites/ball.png");				// Loads ball sprite
}

function setup(){

	// Setting canvas
	var newCanvas = createCanvas(600, 700);
	newCanvas.parent("canvas");

	textFont(font);					// Sets the font to "Press Start 2P"

	// ===============   MAIN GAME 	===============
	player = {
		size: 40,
		speed: 10,
		x: width / 2 - 20,
		y: height - 100
	}
	bullets = [];				// Creates array 'bullets' to keep track of all bullets
	enemies = [];				// Creates array 'enemies' to keep track of the enemies
	enemyInterval = 50;			// How many frames should pass until new enemy spawns
	enemyIntervalCurrent = 0;	// Keeps track of frames passed since last spawn
	score = 0;					// Resets the score
	ammo = 10;					// Start with 10 ammo
	mode = 2; 					// Sets default mode to mainmenu
								// 0: Game, 1: Paused, 2: Mainmenu, 3: Game Over

	// =============== GAME OVER SCREEN ===============
	tryAgainText = new BlinkingText(">Spacebar<", 200, 675, 40);
	lastScore = 0;
	noStroke();
	
}

function draw(){
	background(0);
	
	// Special Text
	textSize(20);
	updatePopupText();
	updateBlinkingText();

	tryAgainText.disable();
	
	
	// =============== GAME ===============
	if(mode === 0){
		updateGame();
	}

	// =============== PAUSED ===============
	if(mode === 1){
		updatePause();
	}

	// =============== Mainmenu ===============
	if(mode === 2){
		updateMainmenu();
	}

	// =============== Game Over!! ===============
	if(mode === 3){
		updateGameOver();		
	}
	
}

// =============== Key Press listener ===============
function keyPressed() {
	if(keyCode === 87 && ammo > 0){	// W
		bullets[bullets.length] = new Bullet();
		ammo--;
	}

	if(keyCode === 32){ // Spacebar

		

		if(mode === 0){	// If in game
			mode = 1;	// -> Switch to pause menu
		}else 
		if(mode === 1){ // If paused
			mode = 0;	// -> Switch to game
		}else 
		if(mode === 2){	// If in main menu
			mode = 0; 	// -> Switch to game
		}else 
		if(mode === 3){ // If game over
			mode = 0;	// -> Switch to game
		}
	}
}