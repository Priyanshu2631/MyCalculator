let input=document.getElementById("input");
let b=document.querySelectorAll('button');
let s="";
let a=Array.from(b);
a.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            s=eval(s);
            input.value=s;
        }
        else if(e.target.innerHTML=="AC"){
            s="";
            input.value=s;
        }
        else if(e.target.innerHTML=="C"){
            s=s.substring(0,s.length-1);
            input.value=s;
        }
        else{
            s+=e.target.innerHTML;
            input.value=s;
        }
    })
})