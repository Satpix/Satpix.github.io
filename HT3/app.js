(function(){
'use strict'
let arrStr=[ ];
let arrNum=[ ];
let schetStr=prompt('Введите фразу сначала слова , потом цифры(цифры через запятую','Карл у Клары,что-то украл ,4,3,4,5,7,9,4,2,4').split(',');
let sum='';
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function arrTotal(){
	for (let i=0;i<schetStr.length;i++){
		if (!Number(schetStr[i])){
			sum+=schetStr[i];	
		}
		else
			arrNum.push(schetStr[i]);
	}
	arrStr=sum.trim().split(' ');
}
function newMass(){
	let lengthStr=arrStr.length;
	for (let i = 0; i < lengthStr; i++) {
  		arrStr.push(arrNum[i]);
	}
}
function outPutConsole(){
	let timeRandom=1;
	for (let i = 0; i < arrStr.length; i++) {
		timeRandom=timeRandom+(getRandomInRange(1, 6));
		setTimeout(function() { console.log(arrStr[i]); }, 1000 * (timeRandom));
	}
}
arrTotal();
newMass();
outPutConsole();
}());