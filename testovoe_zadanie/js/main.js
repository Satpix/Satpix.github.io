btn1.onclick = function () {
    document.getElementById('img1').style.display = 'block';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('circle1').style.backgroundColor = '#a6acd7';
    document.getElementById('circle2').style.backgroundColor = 'white';
    document.getElementById('circle3').style.backgroundColor = 'white';
}
btn2.onclick = function () {
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'block';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('circle1').style.backgroundColor = 'white';
    document.getElementById('circle2').style.backgroundColor = '#a6acd7';
    document.getElementById('circle3').style.backgroundColor = 'white';
}
btn3.onclick = function () {
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'block';
    document.getElementById('circle1').style.backgroundColor = 'white';
    document.getElementById('circle2').style.backgroundColor = 'white';
    document.getElementById('circle3').style.backgroundColor = '#a6acd7';
}

send.onclick = function () {
    alert('Сообщение отправлено');
}
