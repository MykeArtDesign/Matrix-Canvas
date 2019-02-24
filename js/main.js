cvs = document.getElementById('cvs');
ctx = cvs.getContext('2d');

cvs.height = window.innerHeight;
cvs.width = window.innerWidth;

let matrixLetter = "あかさたなはまやらわがざだばぱアカサタナハマヤラワガザダバパぁあぃいぅうぇえぉおかがきぎABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
let matrix = matrixLetter.split('');

console.log(matrix);

let fontSize = 8;
let columns = cvs.width/ fontSize;

let drops = [];

for(let x = 0; x < columns; x++) {
	drops[x] = 1;
}

function draw() {

	ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
	ctx.fillRect(0, 0, cvs.width, cvs.height);
	ctx.fillStyle = '#0F0';
	ctx.font = fontSize + "px arial";

	for ( let i = 0; i < drops.length; i++ ) {

	let index = Math.floor( Math.random() * matrix.length );
	let text = matrix[index];

	let coordX = i * fontSize;
	let coordY = drops[i] * fontSize;


	ctx.fillText( text, coordX, coordY );
	if( coordY > cvs.height && Math.random() > 0.975) {
		drops[i] = 0;
	}
	drops[i]++;
	}
}

setInterval( draw, 32 );