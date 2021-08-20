    let arr=[];
    let arr2=[];
    for (let i = 0; i < 6; i++){
        arr[i]=document.getElementById('button'+(i+1));
    }
    for (let i = 0; i < 6; i++){
        arr2[i]=document.getElementById('project'+(i+1));
    }
    let projects=(a)=>{
        for(let i = 0;i<arr.length;i++){
            if(a==arr[i]){
                arr[i].style.color = '#403B4A';
                arr[i].style.background = 'white';
                arr2[i].style.display = 'block';
            }else{
                arr[i].style.background = "linear-gradient(230deg, #403B4A, #86c8dd)";
                arr[i].style.color = 'white';
                arr2[i].style.display = 'none';
            }
        }
        document.getElementById('project').style.display = 'none';
    }