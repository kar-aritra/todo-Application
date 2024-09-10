// a timer using setInterval

let cnt=0;

function call(){
    const el= document.querySelectorAll("h4")[1];
    el.innerHTML=cnt;
    cnt=cnt+1;
}

setInterval(call,1000);// so it just calls the function in interval of 1 second 