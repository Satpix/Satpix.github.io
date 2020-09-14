
window.onload=function(){
    let a1=document.getElementById('button1');
    let b1=document.getElementById('button2');
    let c1=document.getElementById('button3');
    let d1=document.getElementById('project1');
    let e1=document.getElementById('project2');
    let f1=document.getElementById('project3');

    function projects(a,b,c,d,e,f){
        a.style.color='#1293AD';
        b.style.color='white';
        c.style.color='white';
        a.style.background='white';
        b.style.background="linear-gradient(90deg,#05325D, #40e0f2)";
        c.style.background="linear-gradient(90deg,#05325D, #40e0f2)";
        d.style.display='block';
        e.style.display='none';
        f.style.display='none';
        document.getElementById('project4').style.display='none';

    }
    button1.onclick=()=>{
        let a=a1;
        let b=b1;
        let c=c1;
        let d=d1;
        let e=e1;
        let f=f1;
        projects(a,b,c,d,e,f);
    }
    button2.onclick=()=>{
        let b=a1;
        let a=b1;
        let c=c1;
        let d=e1;
        let e=d1;
        let f=f1;
        projects(a,b,c,d,e,f);


    }
    button3.onclick=()=>{
       let b=a1;
       let c=b1;
       let a=c1;
       let d=f1;
       let e=e1;
       let f=d1;
       projects(a,b,c,d,e,f);
   }
}