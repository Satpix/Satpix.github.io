
let d = document.querySelector(".button1");
let l = document.querySelector(".button2");
d.onclick=()=>{
    let s = new Audio('./assets/c2.mp3');
    s.type="audio/ogg"
    s.play();
    console.log('hu')
};
l.onclick=()=>{
    let r = new Audio('./assets/uve.mp3');
    r.type="audio/ogg"
    r.play();
    console.log('hu')
}