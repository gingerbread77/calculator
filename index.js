const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById('display');
const clear = document.getElementById('reset');
const equal = document.getElementById('equal');

function displayResult(number){
  display.value += number;
}

function clearResult(){
  display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  } catch(error){
    display.value = "Error";
  }
}

digits.forEach((digit)=>{
  digit.addEventListener('click',function(){
    displayResult(digit.textContent);
  });
})

operators.forEach((operator)=>{
  operator.addEventListener("click",function(){
    displayResult(operator.textContent);
  })
})

clear.addEventListener('click',clearResult);
equal.addEventListener('click',calculate);


