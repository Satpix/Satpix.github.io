var score = 0;
var sr=0;
let local;
function toLocal(){
	local = cases.innerHTML;
	localStorage.setItem('local', local);
}
let cases = document.querySelector('ul');
cases.addEventListener('click', function(ev){
	if(ev.target.tagName ==='LI'){
		ev.target.classList.toogle('checked');
		toLocal();
	}else if (ev.target.tagName === 'SPAN'){
		let div = ev.target.parentNode;
		div.remove();
		toLocal();
	}
}, false);

newEl.onclick = function newElement(){
	let li = document.createElement('li');
	let newCase = document.getElementById('newCase').value;
	let t = document.createTextNode(newCase);
	li.appendChild(t);
	if(newCase == ""){
		alert("Введите ваше имя!");
	} else {
		document.getElementById('myCases').appendChild(li);
	}
	document.getElementById('newCase').value = "";
	let span = document.createElement('SPAN');
	let span2 = document.createElement('SPAN');
	let txt = document.createTextNode("X");
	let schet = document.createTextNode(' : '+sr);
	span2.className ="schet";
	span2.appendChild(schet);
	li.appendChild(schet);
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	toLocal();
}
if(localStorage.getItem('local')){
	cases.innerHTML=localStorage.getItem('local');
}
// CSS (example)
// import './assets/css/main.css'
var win = new Audio();
win.src="assets/audio/win.mp3";

single.onclick=function() {
	canvas();
	document.getElementById('canvas').style.display = 'block';
	document.getElementById('menu').style.display = 'none';	
};
multi.onclick=function() {
	canvas2();
	document.getElementById('canvas').style.display = 'block';
	document.getElementById('menu').style.display = 'none';	
};
function canvas(){
	var cvs = document.getElementById("canvas");
	var ctx = cvs.getContext("2d");
	var ship = new Image();
	var bg = new Image();
	var neodd = new Image();
	var k1 = new Image();
	var k2 = new Image();
	var k3 = new Image();
	var k4 = new Image();
	var pulya = new Image();
	var turbo = new Audio();
	var end = new Audio();
	turbo.src="assets/audio/turbo.mp3";
	end.src="assets/audio/end.mp3";
	ship.src = "assets/img/spaceship.png";
	bg.src = "assets/img/bg.png";
	neodd.src = "assets/img/neodd.png";
	k1.src = "assets/img/k2.png";
	k2.src = "assets/img/k1.png";
	k3.src = "assets/img/k3.png";
	k4.src = "assets/img/k4.png";
	pulya.src = "assets/img/pulya.png";
	var fly = new Audio();
	var score_audio = new Audio();
	fly.src = "assets/audio/fly.mp3";
	score_audio.src = "assets/audio/score.mp3";
	document.addEventListener("keydown", move);
	function move() {
		if((xPos + ship.width<cvs.width-30)){
			if (event.key=="ArrowRight"){
				xPos += 20;
				fly.play();
			}
		}
		if((xPos > 20) ){
			if (event.key=="ArrowLeft"){
				xPos -= 20;
				fly.play();
			}
		}
		if((yPos > 0) ){
			if (event.key=="ArrowUp"){
				yPos -= 25;
				fly.play();
			}
		}
		if((yPos+ship.height < 500) ){
			if (event.key=="ArrowDown"){
				yPos += 25;
				fly.play();
			}
		}
		if (event.key==" "){
			yPos -= 150;
			turbo.play();
		}
	}
	var pipe = [];
	pipe[0] = {
		x : 150,
		y : -100,
		x1 : 300,
		y1 :0,
		x2 : 0,
		y2 : -100,
		x3 :400,
		y3 :-100
	}
	let lvl = 1;
	var xPos = 175;
	var yPos = 400;
// var grav = 1.5;
function draw() {
	ctx.drawImage(bg,0,0);
	for(var i = 0; i < pipe.length; i++) {
		ctx.drawImage(k1, pipe[i].x, pipe[i].y);
		if ((i>=10)&&(i<20)){
			lvl=2;
		}
		else if((i>=20)&&(i<30)){
			lvl=3;
		}
		else if(i>=30){
			lvl=4;
		}
		pipe[i].y+=5;
		if (lvl>=2){
			ctx.drawImage(k2, pipe[i].x1, pipe[i].y1);
			pipe[i].y1+=2;
		}
		if (lvl>=3){
			pipe[i].y2+=2;
			pipe[i].x2+=1;
			ctx.drawImage(k3, pipe[i].x2, pipe[i].y2);
		} 
		if (lvl>=4){
			pipe[i].y3+=2;
			pipe[i].x3-=1;
			ctx.drawImage(k4, pipe[i].x3, pipe[i].y3);
		}
		if(pipe[i].y == 350) {
			pipe.push({
				x : Math.floor(Math.random() * (330-20))+20,
				y : -50
			});
		}
		if(pipe[i].y1 == 500) {
			pipe.push({
				x1 : Math.floor(Math.random() * (330-20))+20,
				y1 : -50
			});
		}
		if(pipe[i].y2 == 500) {
			pipe.push({
				x2 : Math.floor(Math.random() * (200+100))-100,
				y2 : -50
			});
		}
		if(pipe[i].y3 == 500) {
			pipe.push({
				x3 : Math.floor(Math.random() * (500-200))+200,
				y3 : -50
			});
		}
		function damage(a,b,c){
			if((xPos + ship.width >= a
				&& xPos <= a + c.width)
				&& (yPos+ship.height>=b
					&& yPos <= b + c.height))
			{
				end.play();
				gameOver();
				label1.Canvas.Rectangle(0,0,label1. Width,label1.Height); 


			}
		}
		damage(pipe[i].x,pipe[i].y,k1);
		damage(pipe[i].x1,pipe[i].y1,k2);
		damage(pipe[i].x2,pipe[i].y2,k3);
		damage(pipe[i].x3,pipe[i].y3,k4);
		
		if((pipe[i].y == 400) || (pipe[i].y1==400)||(pipe[i].y2==400)||(pipe[i].y3==400)) {
			score++;
			score_audio.play();
			let flag=document.getElementById('score');
			flag.innerHTML='Score: '+score;
			sr=score;
		
	}
	}


	ctx.drawImage(neodd, -15, 0);
	ctx.drawImage(neodd, cvs.width - 35, 0);
	ctx.drawImage(ship, xPos, yPos);
	ctx.fillStyle = "#fdd816";
	ctx.font = "24px Verdana";
	ctx.fillText("Lvl: " + lvl, 30, cvs.height - 40);
	ctx.fillText("Счет: " + score, 30, cvs.height - 20);
	requestAnimationFrame(draw);
}
k4.onload = draw;
}

///////////////////////////////////////////////////////////

function canvas2(){
	var cvs = document.getElementById("canvas");
	var ctx = cvs.getContext("2d");
	var ship = new Image();
	var ship2 = new Image();
	var bg = new Image();
	var neodd = new Image();
	var m1 = new Image();
	var m2 = new Image();
	var pulya = new Image();
	var fire = new Audio();
	fire.src="assets/audio/fire.mp3";
	ship.src = "assets/img/spaceship.png";
	ship2.src = "assets/img/spaceship2.png";
	bg.src = "assets/img/bg.png";
	neodd.src = "assets/img/neodd.png";
	m1.src = "assets/img/m1.png";
	m2.src = "assets/img/m2.png";
	pulya.src = "assets/img/pulya.png";
	var fly = new Audio();
	var score_audio = new Audio();
	fly.src = "assets/audio/fly.mp3";
	score_audio.src = "assets/audio/score.mp3";
	document.addEventListener("keydown", move);
	function move() {
		if((xPos + ship.width<cvs.width)){
			if (event.key=="ArrowRight"){
				xPos += 25;
				fly.play();
			}
		}
		if((xPos > 20) ){
			if (event.key=="ArrowLeft"){
				xPos -= 25;
				fly.play();
			}
		}
		if((yPos > 0) ){
			if (event.key=="ArrowUp"){
				yPos -= 25;
				fly.play();
			}
		}
		if((yPos+ship.height < 500) ){
			if (event.key=="ArrowDown"){
				yPos += 25;
				fly.play();
			}
		}
	}
	document.addEventListener("keydown", move2);
	function move2() {
		if((xPos2 + ship2.width<cvs.width)){
			if (event.keyCode=="68"){
				xPos2 += 25;
				fly.play();
			}
		}
		if((xPos2 > 20) ){
			if (event.keyCode=="65"){
				xPos2 -= 25;
				fly.play();
			}
		}
		if((yPos2 > 0) ){
			if (event.keyCode=="87"){
				yPos2 -= 25;
				fly.play();
			}
		}
		if((yPos2+ship2.height < 500) ){
			if (event.keyCode=="83"){
				yPos2 += 25;
				fly.play();
			}
		}
	}
	var pipe = [];
	pipe[0] = {
		x : 200,
		y : 50
	}
	var score = 0;
	let lvl = 0;
	var xPos = 175;
	var yPos = 450;
	var xPos2= 175;
	var yPos2= 0;

	var pul = [];
	pul[0] = {
		x : 190,
		y : 485
	}
	var pul2 = [];
	pul2[0] ={
		x: 190,
		y:0
	}

	function draw() {
		ctx.drawImage(bg, 0, 0);
		for(var i = 0; i < pul.length; i++) {
			ctx.drawImage(pulya, pul[i].x, pul[i].y);
			pul[i].y-=5;
			if(pul[i].y == 0) {
				pul.push({
					x : xPos+15,
					y : yPos+10
				});
				fire.play();
			}
			if((xPos2 + ship2.width >= pul[i].x
				&& xPos2 <= pul[i].x + pulya.width)
				&& (yPos2+ship2.height>=pul[i].y
					&& yPos2 <= pul[i].y + pulya.height))
			{	
				Player1(); 
				label1.Canvas.Rectangle(0,0,label1. Width,label1.Height); 
			}
		}
		for(var i = 0; i < pul2.length; i++) {
			ctx.drawImage(pulya, pul2[i].x, pul2[i].y);
			pul2[i].y+=5;
			if(pul2[i].y == 490) {
				pul2.push({
					x : xPos2+15,
					y : yPos2+30
				});
				fire.play();
			}
			if((xPos + ship.width >= pul2[i].x
				&& xPos <= pul2[i].x + pulya.width)
				&& (yPos+ship.height>=pul2[i].y
					&& yPos <= pul2[i].y + pulya.height))
			{
				Player2(); 
				label1.Canvas.Rectangle(0,0,label1. Width,label1.Height); 
			}
		}
		ctx.drawImage(neodd, -15, 0);
		ctx.drawImage(neodd, cvs.width - 35, 0);
		ctx.drawImage(ship, xPos, yPos);
		ctx.drawImage(ship2, xPos2, yPos2);
		ctx.fillStyle = "#fdd816";
		ctx.font = "24px Verdana";
		ctx.fillText("Player2", 30, 28);
		ctx.fillText("Player1", 30, cvs.height-10);
		requestAnimationFrame(draw);
	}
	m2.onload = draw;
}
function gameOver() {
	document.getElementById('canvas').style.display = 'none';
	document.getElementById('end').style.display = 'block';
	document.getElementById('game-over').style.display = 'block';
	document.getElementById('score').style.display = 'block';
	document.getElementById('stats').style.display = 'block';
}
reset.onclick=function() {
	document.getElementById('canvas').style.display = 'block';
	document.getElementById('end').style.display = 'none';
	location.reload();
}
reset2.onclick=function() {
	document.getElementById('record').style.display = 'none';
	document.getElementById('menu').style.display = 'block';	
}
function Player1(){
	document.getElementById('canvas').style.display = 'none';
	document.getElementById('end').style.display = 'block';
	document.getElementById('player1').style.display = 'block';
	win.play();
}
function Player2(){
	document.getElementById('canvas').style.display = 'none';
	document.getElementById('end').style.display = 'block';
	document.getElementById('player2').style.display = 'block';
	win.play();
}
records.onclick=function() {
	document.getElementById('record').style.display = 'block';
	document.getElementById('menu').style.display = 'none';	
}
reset3.onclick=function() {
	document.getElementById('menu').style.display = 'block';
	document.getElementById('options').style.display = 'none';}
option.onclick=function() {
	document.getElementById('menu').style.display = 'none';
	document.getElementById('options').style.display = 'block';

}