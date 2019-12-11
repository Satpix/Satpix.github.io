let cross=1;
/*['1,2,3','4,5,6','7,8,9','1,4,7','2,5,8','3,6,9','1,5,9','3,5,7'];*/
let winner1 = [{x:1,y:2,z:3},{x:4,y:5,z:6},{x:7,y:8,z:9},{x:1,y:4,z:7},{x:2,y:5,z:8},{x:3,y:6,z:9},{x:1,y:5,z:9},{x:3,y:5,z:7}];
let first=[ ];
let second=[ ]; 
let fill=0;
let btn1=0,btn2=0,btn3=0,btn4=0,btn5=0,btn6=0,btn7=0,btn8=0,btn9=0;
let counter1=0, counter2=0;
let gran=0, usl=0;
let isk=[ ];
let rNum=0;
let ls=0;
window.onload = function(){
	counter1=(Number.parseInt(localStorage.getItem('counter1',0))||0);
	counter2=(Number.parseInt(localStorage.getItem('counter2',0))||0);
	scores1();
	scores2();
}

endOver(case1,'case1',1,btn1);
endOver(case2,'case2',2,btn2);
endOver(case3,'case3',3,btn3);
endOver(case4,'case4',4,btn4);
endOver(case5,'case5',5,btn5);
endOver(case6,'case6',6,btn6);
endOver(case7,'case7',7,btn7);
endOver(case8,'case8',8,btn8);
endOver(case9,'case9',9,btn9);

function endOver(a,r,p,btn){
	a.onclick=function() {
		klick(a,r,p,btn);
		if (ls==0){
			klick(a,'case'+rNum,rNum,btn);
		}
		
	}
}

function klick(a,r,p,btn){
	if (btn==0){
		if (cross==1){
			document.getElementById(r).style.backgroundImage='url(img/cross.png)';
			first.push(p);
			cross=0;
			fill+=1;
		}
		else{
			document.getElementById(r).style.backgroundImage='url(img/circle.png)';
			second.push(p);
			cross=1;
			fill+=1;
		}
		btn=p;
		isk.push(p);
	}
	winner();
	randIsk();
}


	function winner(){
		first.sort();
		second.sort();
		for (let i=0;i<winner1.length;i++){
			let f=0;
			let s=0;
			let x=winner1[i].x;
			let y=winner1[i].y;
			let z=winner1[i].z;
			for (let i=0;i<first.length;i++){
				if ((x==first[i]) || (y==first[i]) || (z==first[i])){
					f+=1;
				}
			}
			for (let i=0;i<second.length;i++){
				if ((x==second[i]) || (y==second[i]) || (z==second[i])){
					s+=1;
				}
			}
			if (f==3){
				ls=1;
				counter1+=1;
				localStorage.setItem('counter1',counter1);
				if (gran==1){
					counter1=0;
				}
				else{
					scores1();	
				}
				if (counter1<5){	
					reset();	
				}
				else{
					let title=document.getElementById('frame_title');
					title.innerHTML='WINNER PLAYER1';
					gran=1;
				}
			}
			if (s==3){
				ls=1;
				counter2+=1;
				if (gran==1){
					counter2=0;
				}
				else{
					scores2();	
				}
				localStorage.setItem('counter2',counter2);
				if (counter2<5){	
					reset();	
				}
				else{
					let title=document.getElementById('frame_title');
					title.innerHTML='WINNER PLAYER2';
					gran=1;
				}		
			}
			else if (fill==9){
				reset();
			}
			if (gran==1){
				localStorage.clear();
			}
		}
	}
	function scores1(){
		let flag1=document.getElementById('score1');
		flag1.innerHTML=counter1;
	}
	function scores2(){
		let flag2=document.getElementById('score2');
		flag2.innerHTML=counter2;
	}
	function randInt(min, max) {
		let n;
		while(true){
			if((n = Math.floor(Math.random() * (max - min + 1)) + min) )
				return n;
		}
	}
	function randIsk(){
		do {
			usl=0;
			rNum=randInt(1, 9);
			if (isk.length<9){
				for (let i=0;i<isk.length;i++){
					if (rNum===isk[i])
					{
						usl+=1;
					}
				}
			}
		} while (usl>0);
		
	}
	function reset(){
		window.location.reload();
	}
