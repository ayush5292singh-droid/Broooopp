let questions = [
"Hello! What is your monthly salary?"
];

let current = 0;

let salary = 0;


function nextQuestion(){

let input = document.getElementById("answer");

let value = Number(input.value);


if(value <= 0){

alert("Enter a valid salary");

return;

}


salary = value;


showAdvice();


input.value = "";

}



function showAdvice(){


let home = salary * 0.30;

let food = salary * 0.15;

let travel = salary * 0.10;

let entertainment = salary * 0.05;

let savings = salary * 0.40;



document.getElementById("question").innerHTML =
"Here is your smart budget 🤖";


document.getElementById("result").innerHTML =

"💵 Salary: ₹" + salary +

"<br><br>🏠 Home/Rent: ₹" + home.toFixed(0) +

"<br>🍔 Food: ₹" + food.toFixed(0) +

"<br>🚗 Travel: ₹" + travel.toFixed(0) +

"<br>🎮 Entertainment: ₹" + entertainment.toFixed(0) +

"<br>💰 Savings: ₹" + savings.toFixed(0) +

"<br><br>💡 Advice: Save first, then spend. Avoid unnecessary expenses!";

}
