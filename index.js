// javascript
// let num=4
// let num2=2
// let num=document.getElementById("n1").textContent
// let num2=document.getElementById("n2").textContent
let num=0
let num1=0
let num2=0
let flag=0
let res=0
let fla=0
let fls=0
let flm=0
let fld=0
let inp=document.getElementById("in")
// console.log(inp)
function show0(){
    num*=10
    num+=0
    inp.textContent=num
}
function show1(){
    num*=10
    num+=1
    inp.textContent=num
}
function show2(){
    num*=10
    num+=2
    inp.textContent=num
}
function show3(){
    num*=10
    num+=3
    inp.textContent=num
}
function show4(){
    num*=10
    num+=4
    inp.textContent=num
}
function show5(){
    num*=10
    num+=5
    inp.textContent=num
}
function show6(){
    num*=10
    num+=6
    inp.textContent=num
}
function show7(){
    num*=10
    num+=0
    inp.textContent=num
}
function show8(){
    num*=10
    num+=8
    inp.textContent=num
}
function show9(){
    num*=10
    num+=0
    inp.textContent=num
}

let out=0
out=document.getElementById("result")
function add(){
    if(fla==0){
        res=0
    }
    res+=num
    num=0
    fla=1
    // out.textContent="Result: "+res
    // console.log(num)
}
function subtract(){
    if(fls==0){
        res=num
    }
    else{
        res-=num
    }
    
    num=0
    fls=1
    // out.textContent="Result: "+res
}
function multiply(){
    if(flm==0){
        res=1
    }
    res*=num
    num=0
    flm=1
    // out.textContent="Result: "+res
}
function divide(){
    if(fld==0){
        res=num
    }
    else{
        res/=num
    }
    
    num=0
    fld=1
    // out.textContent="Result: "+res
}
function clear(){
    num=0
    num1=0
    num2=0
    flag=0
    res=0
    fla=0
    fls=0
    flm=0
    fld=0
    res=0
    out.textContent="Result: "
    // inp.textContent=0
}
function calc(){
    if(fla==1){
        add()
        fla=0
    }
    else if(fls==1){
        subtract()
        fls=0
    }
    else if(flm==1){
        multiply()
        flm=0
    }
    else if(fld==1){
        divide()
        fld=0
    }
    out.textContent="Result: "+res

}