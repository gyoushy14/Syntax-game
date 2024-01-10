//"use strict"
let pars = ["function agetodays(age) { var ageintodays = age * 365 ; return ageintodays; } console.log(agetodays(prompt('enter your age')));"
,"function calcprice(price , taxes){    let total = price * taxes ;    return total;} let real_price = calcprice(20,10) ; console.log( real_price+ '$') ; function calcEGY(price) {    let egy = price*50;    return egy;} let Egy_price = calcEGY(real_price);console.log(Egy_price + ' جنيه'  );"
,"function calc(...value) {    let result = 0;    for(let i = 0 ; i < value.length ; i++) { result += value[i]; }  console.log(result);} calc(prompt(' Enter Your value  '));" ];

let text = document.querySelector("#text");
function paragraphs(){
let parsindex = Math.floor(Math.random() * pars.length);
text.innerHTML="";
pars[parsindex].split('').forEach(fasla => {
    let spans = `<span>${fasla}</span>`;
    text.innerHTML +=spans; 
})
}
paragraphs();
let charindex=0;
let mistakeTag = document.querySelector("#mis span");
let rightTag = document.querySelector("#wpm span");
let timerTag = document.querySelector("#time span b");
// let tryagain = document.querySelector("button");
let tryagain = document.getElementById("last_btn");
let timer ; 
let timemax;
timemax=60;
timeleft=timemax;
mistakes=right=isTyping=0;
let inivalue= document.getElementById("ini");
function correcttext(){
    let char = text.querySelectorAll("span");
    let vini= inivalue.value.split("")[charindex];
    if(!isTyping){
        timer=setInterval(inittimer,1000);
        isTyping=true;
    }
    if(vini==null){
        charindex--;
        char[charindex].classList.remove("correct","incorrect");
        char[charindex].classList.add("incorrect");

    }
        else if(char[charindex].innerText === vini ){
        char[charindex].classList.add("correct");
        char[charindex].style.color="green";
        right ++;
        }else{
            mistakes++;
        char[charindex].classList.add("incorrect");
        char[charindex].style.color="red";

        } charindex++;
        char[charindex].classList.add("active");
        mistakeTag.innerText=mistakes;
        rightTag.innerText=right;
    }
inivalue.addEventListener("input",correcttext);

function inittimer(){
    if(timeleft>0){
        timeleft --;
        timerTag.innerText=timeleft;
    }else{
        clearInterval(timer)
    }
}

function btn(){
paragraphs();
inivalue
timeleft=timemax;
mistakes=right=isTyping=0;
timerTag.innerText=timeleft;
mistakeTag.innerText=mistakes;
rightTag.innerText=right;
}
tryagain.addEventListener("click" , btn);


