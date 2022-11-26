let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest");

let score = 0;

function click1(){
    score += 1;
    scoreHome.innerText = score;
}

function click2(){
    score += 2;
    scoreHome.innerText = score;
}


function click3(){
    score += 3;
    scoreHome.innerText = score;
}

let mark = 0;

function click4(){
    mark += 1;
    scoreGuest.innerText = mark;
}

function click5(){
    mark += 2;
    scoreGuest.innerText = mark;
}

function click6(){
    mark += 3;
    scoreGuest.innerText = mark;
}





