function getIntDigitCount(num){
	let c = 0;	

	while(num > 1) {
		c++;
		num /= 10;
	}

	return c + 1;
}

function bytestyleNumber(num){
	for(let i = 9 - getIntDigitCount(num); i > 0; i--){
		num = "0" + num;
	}

	return num;
}