class Bullet {
	constructor() {
		this.size = 20;
		this.x = player.x;
		this.y = player.y;
		this.collat = 0;
	}

	update(){
		this.y -= 25;
		image(ballImage, this.x + 12, this.y, this.size, this.size);
	}
}

class Spaceship {
	constructor(){
		this.width = 60;
		this.height = 40;
		this.x = Math.floor(random(0, width - this.width));
		this.y = -100
	}

	update(){
		this.y += 5;
		image(enemyImage, this.x + 10, this.y, this.width, this.height);
	}
}

