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
let totalExpense = 0;
let expenses = [];

function addExpense(){

let category =
document.getElementById("category").value;

let amount =
Number(document.getElementById("expense").value);

if(category==="" || amount<=0){

alert("Enter category and amount");

return;

}

expenses.push({
category:category,
amount:amount
});

totalExpense += amount;

let html="";

expenses.forEach(function(item){

html += "<p>📌 <b>"+item.category+"</b> : ₹"+item.amount+"</p>";

});

html += "<hr>";

html += "<h3>Total Expenses: ₹"+totalExpense+"</h3>";

html += "<h3>Remaining: ₹"+(salary-totalExpense)+"</h3>";

document.getElementById("expenseList").innerHTML = html;

document.getElementById("category").value="";

document.getElementById("expense").value="";

}


else{


document.getElementById("result").innerHTML +=

"<br><br>✅ Robot Advice: Your spending is under control!";

}


}
// ROBOT VOICE

function speak(text){

let speech = new SpeechSynthesisUtterance(text);

speech.rate = 1;

speech.pitch = 1.2;

window.speechSynthesis.speak(speech);

}



// DARK MODE

function toggleMode(){

document.body.classList.toggle("dark");

}



// Speak advice after showing result

function robotSpeak(){

let message =
document.getElementById("result").innerText;
setTimeout(robotSpeak,500);
speak(message);

}
