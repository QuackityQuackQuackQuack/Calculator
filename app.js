let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result")

function add(){
    result.innerHTML = Number(num1.value) + Number(num2.value)
}

function sub(){
    result.innerHTML = Number(num1.value) - Number(num2.value)
}

function div(){
     result.innerHTML = Number(num1.value) / Number(num2.value)
}

function mult(){
     result.innerHTML = Number(num1.value) * Number(num2.value)
}