

const decreaceBtn = document.getElementById("decreaceBtn");
const resetBtn = document.getElementById("resetBtn");
const increaceBtn = document.getElementById("increaceBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaceBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decreaceBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count =  0;
    countlabel.textContent = count;
}
