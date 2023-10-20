const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnAC = document.getElementById("btnAC");
const btnper = document.getElementById("btnper");
const btnDE = document.getElementById("btnDE");
const btndiv = document.getElementById("btndiv");
const btnmul = document.getElementById("btnmul");
const btnmin = document.getElementById("btnmin");
const btnplu = document.getElementById("btnplu");
const btneql = document.getElementById("btneql");
const btndot = document.getElementById("btndot");

const input = document.getElementById("input")


btn1.addEventListener('click', function(){
   input.value = input.value === '0' ? 1: input.value + '1'
});

btn2.addEventListener('click', function (){
   input.value = input.value === '0' ? 2: input.value + '2';
})

btn3.addEventListener('click', function(){
    input.value = input.value === '0'? 3: input.value + '3'
})

btn4.addEventListener('click', function(){
    input.value = input.value === '0'? 4: input.value + '4'
})

btn5.addEventListener('click', function(){
    input.value = input.value === '0'? 5: input.value + '5'
})

btn7.addEventListener('click', function(){
    input.value = input.value === '0'? 7 : input.value + '7' 
})

btn8.addEventListener('click', function(){
    input.value = input.value === '0'? 8 : input.value + '8' 
})

btn9.addEventListener('click', function(){
    input.value = input.value === '0'? 9 : input.value + '9' 
})

btn6.addEventListener('click', function(){
    input.value = input.value === '0'? 6 : input.value + '6' 
})

btn0.addEventListener('click', function(){
    input.value = input.value === '0'? 0 : input.value + '0' 
})

btn00.addEventListener('click', function(){
    input.value = input.value === '0'? 0 : input.value + '00' 
})

btndiv.addEventListener('click', function(){
    input.value = input.value === '0'? 0 : input.value + '/' 
})

btnmul.addEventListener('click', function(){
    input.value = input.value === '0'? 0 : input.value + '*' 
})

btnmin.addEventListener('click', function(){
    input.value = input.value === '0'? 0 : input.value + '-' 
})

btnplu.addEventListener('click', function(){
    input.value = input.value === '0'? 0 : input.value + '+' 
})

btndot.addEventListener('click', function(){
    input.value = input.value === '0'? 0 : input.value + '.' 
})

btneql.addEventListener('click', function(){
    input.value = eval(input.value)
})

btnAC.addEventListener('click', function() {
    input.value = "0";
})

btnDE.addEventListener('click', function() {
    input.value = input.value ==='0' ? 0: input.value.toString().slice(0, -1);
    console.log("input.value");
})