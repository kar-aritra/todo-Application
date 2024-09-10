// a timer  using setTimeout

let i=0;

function gello(){
    console.log(i);
    i=i+1;
    setTimeout(gello,1000);
}

setTimeout(gello,1000);