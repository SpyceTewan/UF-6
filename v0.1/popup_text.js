let popupTexts = [];

class PopupText {
	constructor(text, x, y){
		this.text = text;
		this.x = x;
		this.y = y;
		this.time = 100;

	}

	update(){
		this.time--;
		this.y--;
		fill(map(this.time, 0, 100, 0, 255));
		text(this.text, this.x, this.y);
	}
}

function popupText(text, x, y){
	popupTexts[popupTexts.length] = new PopupText(text, x, y);
}

function updatePopupText() {
	for(let i = 0; i < popupTexts.length; i++){
		popupTexts[i].update();
	}
}