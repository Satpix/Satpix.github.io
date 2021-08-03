    let arr=[];
    let arr2=[];
    for (let i = 0; i < 4; i++){
        arr[i]=document.getElementById('button'+(i+1));
    }
    for (let i = 0; i < 4; i++){
        arr2[i]=document.getElementById('project'+(i+1));
    }
    let projects=(a)=>{
        for(let i = 0;i<arr.length;i++){
            if(a==arr[i]){
                arr[i].style.color = '#1293AD';
                arr[i].style.background = 'white';
                arr2[i].style.display = 'block';
            }else{
                arr[i].style.background = "linear-gradient(90deg,#05325D, #40e0f2)";
                arr[i].style.color = 'white';
                arr2[i].style.display = 'none';
            }
        }
        document.getElementById('project').style.display = 'none';
    }