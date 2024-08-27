let input = document.getElementById("input")
let firstnumber;
let secondnumber;
let operation;
let step = 0;
let result = 0;
let numarray = []
let secondarray = []

function handlebutton(num){

if(step === 0 || step === 1){
numarray.push(num)
step = 1;
firstnumber = Number(numarray.join(''))
input.value = firstnumber;
}
else if(step === 2){
     secondarray.push(num)
     secondnumber = Number(secondarray.join(''))
     input.value = secondnumber

}
}

function getoperator(op){
     step = 2;
     operation = op;

}
function cleardisplay(){
input.value = 0;
operation = null;
numarray = []
secondarray = []
firstnumber = null;
secondnumber = null;
step = 0;
result = 0;
}
function calculate(){
     if(operation === '+'){
          result = firstnumber + secondnumber;
          input.value = result;
     }
     else if(operation === '-'){
          result = firstnumber - secondnumber;
          input.value = result;
     }
     else if(operation === '/'){
          result = firstnumber / secondnumber;
          input.value = result;
     }else if(operation === '*'){
          result = firstnumber * secondnumber;
          input.value = result;
}

}