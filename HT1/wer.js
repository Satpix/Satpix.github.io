(function(){
'use strict'
let checkStr, checkCycle, genderInput;
function checkIn(checkStr){
		let check=true;
		let range=/^[а-яА-ЯёЁa-zA-Z. ]+$/;
		if (Number(checkStr) || (checkStr==undefined) ||(checkStr==!range)||(checkStr==null)){
			check=false;
		}
		else
			check=true;
		return check;
	}
function checkInner(a,b,c){
	do{
		a=prompt(b,c);
		checkCycle=checkIn(a);
	}while(checkCycle==false);
	return a;
}
function outFullname(){
	let textName='Введите Имя', textSurname='Введите Фамилию', text2Name='Ахмед', text2Surname='Камаш', nameInput, surnameInput,nameOut;
	let a,b,c;
    nameOut=checkInner(nameInput,textName,text2Name)+' '+checkInner(surnameInput,textSurname,text2Surname);
    return nameOut;
}
function outGender(){
	do{
		genderInput=prompt('Введите пол','(М или Ж)');
		checkCycle=checkIn(genderInput);
		if ((genderInput!=='м')&&(genderInput!=='М')&&(genderInput!=='Ж')&&(genderInput!=='ж'))
			checkCycle=false;
	}while(checkCycle==false);
	return genderInput;
}  
function outAge(){
	let ageInput,ageOut;
	let range=/^[а-яА-ЯёЁa-zA-Z. ]+$/;
	do{
		ageInput=prompt('Введите возраст','17');
		if (!Number(ageInput) || (ageInput==undefined) ||(ageInput==!range)||(ageInput==null)){
			checkCycle=false;
		}
		else
			checkCycle=true;
	}while(checkCycle==false);
	return ageInput;
}
function agePension(){
	let pensionOutput;
	if (Number(ageNumber)<56){
		pensionOutput='Нет';
	}
	else if ((Number(ageNumber)>=56)&&((genderLetter=='Ж')||(genderLetter=='ж'))){
	pensionOutput='Да';
	}
	else if ((Number(ageNumber)>60)&&((genderLetter=='М')||(genderLetter=='м'))){
		pensionOutput='Да';
	}
	else
		pensionOutput='Нет';
	return pensionOutput;
}
let nameFull=outFullname(), ageNumber=outAge(), genderLetter=outGender();
alert('Полное имя: '+ nameFull +' \n'+ 'Пол: '+genderLetter+' \n'+'На пенсии: '+agePension()+' ');
}());









