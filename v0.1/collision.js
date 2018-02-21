function collisionRect(x1, y1, w1, h1, x2, y2, w2, h2){
		//Horizontal collision
		if(x1 + w1 > x2 && x1 < x2 + w2){
      	//Vertical collision
			if(y1 < y2 + h2 && y1 + h1 > y2){
					return true;
			}
		}
}

function collisionCircle(x1, y1, r1, x2, y2, r2){
    if(dist(x1, y1, x2, y2) < r1 + r2){
        return true;
    }
}
