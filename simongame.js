let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","green","red","purple"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is Started");
        started=true;

        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randInx=Math.floor(Math.random()*3);
    let randColor=btns[randInx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor)
    btnflash(randbtn);
}
function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000); 
        }
    }else{
        h2.innerHTML=`Game Over!! Your Score was <b>${level}</b><br>Press any Key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnflash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];
}