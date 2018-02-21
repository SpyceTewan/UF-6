let blinkingTexts = [];

class BlinkingText {
	constructor(text, x, y, speed){
		this.text = text;
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.time = 0;
		this.enabled = false;

		blinkingTexts[blinkingTexts.length] = this;
	}

	update(){
		if(this.enabled){
			this.time++;
			if(this.time >= this.speed){
				fill(255);
				text(this.text, this.x, this.y);
				
				if(this.time === this.speed * 2){
					this.time = 0;
				}
			}
		}
	}

	enable() {
		this.enabled = true;
	}

	disable() {
		this.enabled = false;
	}
}

function updateBlinkingText() {
	for(let i = 0; i < blinkingTexts.length; i++){
		blinkingTexts[i].update();
	}
}