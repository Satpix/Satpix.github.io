(function(){
'use strict'
const DIGITS='0123456789';
let checkStr,checkCycle=true;
let student=[ ], numberr=[ ], summa=[ ];
let arr = {
	stu:student,
	num:numberr,
	sum:summa
}
function checkIn(checkStr){
	let check=true;
	if ((checkStr==undefined)||(checkStr==null)){
	check=false;
	}
	else
		check=true;
	return check;
	}
while(checkCycle==true){
	let fullName=prompt('Введите Имя Фамилию учащегося','Камаш Ахмед');

	checkCycle=checkIn(fullName);
	if (checkCycle==true)
	student.push(fullName);
};
for(let i=0;i<student.length;i++){
	let inputEval=prompt(student[i]+' Оценки вводите через пробел','4');
	numberr.push(inputEval);
}
for(let i=0;i<numberr.length;i++){
	let mas = numberr[i];
	let mass = mas.trim().split(' ').filter(value => value)
.map(value=>Number(value));;
let summR=0;
	for(let i=0;i<mass.length;i++){
		let numbers=mass[i];
		summR=summR+Number(mass[i]);
		if (i==mass.length-1) {
			summR=summR/mass.length;
			summa.push(summR);
		}
	}

}
console.log('Имя Фамилия'+'  Оценки'+'   Средний балл')
for(let i=0;i<student.length;i++){
	console.log(arr.stu[i]+' '+arr.num[i]+' '+arr.sum[i]);
}

}());