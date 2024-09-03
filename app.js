const display = document.getElementById('display');
const btn = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

btn.forEach(function(button){
    button.addEventListener('click' , function(){
        display.value += button.getAttribute('data-value')
    });
});

clear.addEventListener('click' , function(){
    display.value = "";
});

equal.addEventListener('click' , function(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
});