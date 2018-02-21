function updateGame(){
	image(playerImage, player.x, player.y, player.size, player.size);
	enemyIntervalCurrent++;

	// =============== Infobar ===============
	fill(255);
	text("Score: " + bytestyleNumber(score), 10, 30);
	text("Ammo: " + ammo, 10, 60);

	// =============== Player Controls ===============
	// Testing for left press
	if(keyIsDown(65)){
		if(player.x > 0){
			player.x -= player.speed;
		}
	}

	// Testing for right press
	if(keyIsDown(68)){
		if(player.x < width - player.size){
			player.x += player.speed;
		}
	}

	// Spawning new enemies
	if(enemyInterval === enemyIntervalCurrent){
		enemies[enemies.length] = new Spaceship();
		enemyIntervalCurrent = 0;
	}

	// Updating bullets
	for(let i = 0; i < bullets.length; i++){
		
		bullets[i].update();

		if(bullets[i].y < 0) {
			bullets.shift();
		}
	}

	for(let i = 0; i < enemies.length; i++){
			
		enemies[i].update();

		if(enemies[i].y > height){
			die();
		}

		for(let j = 0; j < bullets.length; j++){
			if(enemies.length > 0 && enemies[i] != null){
				if(collisionRect(
					enemies[i].x, 
					enemies[i].y,
					enemies[i].width,
					enemies[i].height,
					bullets[j].x,
					bullets[j].y,
					bullets[j].size,
					bullets[j].size)){

					// Enemy hit
					bullets[j].collat++;
					score += bullets[j].collat * 100;
					popupText("+" + bullets[j].collat * 100, enemies[i].x, enemies[i].y);

					// Delete enemy from array
					enemies.splice(i, 1);
					ammo++;
					i--;
				}
			}
		}
	}	
}

function die(){
	enemies.splice(0, enemies.length);

	player.x = width / 2 - 20;
	lastScore = bytestyleNumber(score);
	score = 0;
	enemyIntervalCurrent = 0;
	ammo = 10;
	mode = 3;
}