const number1 = document.querySelector(".number1");
// console.log(number1);
const number2 = document.querySelector(".number2");
// console.log(number2);
//////Access the input
const ansInput= document.querySelector(".quizform input[type='text']");
console.log(ansInput);
////----score Access
const score = document.querySelector(".score");
///------ Wrong Answer
const wrongAnswer = document.querySelector(".wrongans");
console.log(wrongAnswer);

////----Form Access
const form = document.querySelector("form");
// console.log(form);
///----------Submit
const submitbtn = document.querySelector(".submitbtn");
console.log(submitbtn);
///////---------------

const num1 = Math.floor(Math.random()*10);
console.log(num1); 
const num2 = Math.floor(Math.random()*10);
console.log(num2);

number1.textContent = num1;
number2.textContent= num2;
const ansTheNumber= num1*num2;
// console.log(ansTheNumber);
let QScore = JSON.parse(localStorage.getItem("QScore"));

if(!QScore){
  QScore= 0;
}
score.innerHTML = QScore;


form.addEventListener("submit", (e)=>{
   
  number1.style.color="red";
  const hh = +ansInput.value;
  console.log(hh, typeof hh);
  ansInput.value="";
 

if(hh === ansTheNumber){
  QScore++;
// e.preventDefault();
  console.log("Right Answer");
 console.log(QScore);
  
 LocalStorage();
 
}else{
  QScore--
window.alert("Wrong Answer");
LocalStorage();
}


});


function LocalStorage(){

  localStorage.setItem("QScore", JSON.stringify(QScore));
}



