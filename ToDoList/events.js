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

function newElement(){
	let li = document.createElement('li');
	let newCase = document.getElementById('newCase').value;
	let t = document.createTextNode(newCase);
	li.appendChild(t);
	if(newCase == ""){
		alert("Введите ваше дело!");
	} else {
		document.getElementById('myCases').appendChild(li);
	}
	document.getElementById('newCase').value = "";
	let span = document.createElement('SPAN');
	let txt = document.createTextNode("X");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	toLocal();
}
if(localStorage.getItem('local')){
	cases.innerHTML=localStorage.getItem('local');
}
