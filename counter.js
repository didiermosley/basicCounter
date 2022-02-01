"use strict";

const number = document.querySelector(".num");
const dec = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const inc = document.querySelector(".inc");
const p = document.querySelector(".p");
let counter = 0;
const mensaje = document.querySelector(".warning");
let boolean = true;

dec.addEventListener("click",()=>{
    if(counter<=0){
        warning("#a80202","#ff8c8c", mensaje);
        p.textContent=``;
        p.textContent=`The count is zero, you must increase!`;
    }
    else{
        counter--;
        number.textContent = counter;
    }
})

reset.addEventListener("click",()=>{
    if(counter == 0){
        // alert("Hold on! The count is zero 😁");
        warning("#dc9300","#fdf573",mensaje);
        p.textContent="";
        p.textContent="Hold on! The count is zero 😁";
    }else{
        counter=0;
        number.textContent = counter;
    }
})

inc.addEventListener("click",()=>{
    counter++;
    number.textContent=counter;
    mensaje.style.display="none";
})

const warning = (color,bg,msn)=>{
    msn.style.color = color;
    msn.style.background = bg;
    msn.style.display = "block";
}

let n = 2;

document.querySelector(".another").addEventListener("click",()=>{
    let container = document.createElement("DIV");
    let title = document.createElement("H1");
    let number = document.createElement("H2");
    let btnCont = document.createElement("DIV");
    let btnDec = document.createElement("BUTTON");
    let btnReset = document.createElement("BUTTON");
    let btnInc = document.createElement("BUTTON");

    container.classList.add("counter");
    number.classList.add("num");
    btnCont.classList.add("buttons");
    btnDec.classList.add("btn");
    btnReset.classList.add("btn");
    btnInc.classList.add("btn");

    title.textContent=`Counter ${n++}`;
    number.textContent=`0`;
    btnDec.textContent=`Decrease`;
    btnReset.textContent=`Reset`;
    btnInc.textContent=`Increase`;

    btnCont.appendChild(btnDec);
    btnCont.appendChild(btnReset);
    btnCont.appendChild(btnInc);

    container.appendChild(title);
    container.appendChild(number);
    container.appendChild(btnCont);

    document.querySelector(".container").appendChild(container);
})

