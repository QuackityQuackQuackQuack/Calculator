let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result")

function add(){
    let add = Number(num1.value) + Number(num2.value);
    result.innerHTML = add;
}

function sub(){
    let sub = Number(num1.value) - Number(num2.value);
    result.innerHTML = sub;
}

function div(){
    let div = Number(num1.value) / Number(num2.value);
    result.innerHTML = div;
}

function mult(){
    let mult = Number(num1.value) * Number(num2.value);
    result.innerHTML = mult;
}

function peri(){
    let peri = (Number(num1.value) + Number(num2.value)) *2;
    result.innerHTML = peri;
}

function area(){
    let area = Number(num1.value) * Number(num2.value);
    result.innerHTML = area;
}

function temp(){
    let inputValue = Number(document.querySelector("#value").value);
    let cel = document.querySelector("#celsius");
    let fa = document.querySelector("#farenheit");

    if(cel.checked ) {
        let celsiusCon = (inputValue * 9)/5 + 32};
        result.innerHTML = celsiusCon;
    }

    if(fa.checked ) {
        let farenheitCon = ((inputValue - 32)/ 1.8 + 32);
        result.innerHTML = farenheitCon
        ;
    }
}