let menu = document.querySelector('.menu');
let check = document.querySelector('#check');

let x=0;
menu.addEventListener('click',()=>{
    if(x==0){
    check.classList.remove('remove');
    check.classList.add('nav');
    x=1;
    }
    else{
        check.classList.remove('nav');
        check.classList.add('remove');
        x=0;
    }
})

function myFunction(y){
    if(y.matches){
            check.classList.remove('nav');
            check.classList.remove('remove');
            x=0;
    }
    else{
        
    }
}

var y = window.matchMedia("(min-width:768px)");
myFunction(y);

y.addEventListener("change", function() {
    myFunction(y);
});

// loader
let loader = document.querySelector("#loader");
window.addEventListener('load',()=>{
loader.style.display="none";
})
