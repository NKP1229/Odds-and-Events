// TODO: this file! :)
const NumberBank = [];
const Odds = [];
const Evens = [];
let numberBank, oddNumbers, evenNumbers;
function toNumberBank(event) {
    event.preventDefault();
    try {
        const number = document.getElementById('number').value;
        NumberBank.push(number);
        console.log("NumberBank: ",NumberBank);
        numberBank.textContent = NumberBank;
    }
    catch(error){
        console.error(error.message);
        alert('There was an error submitting the form.');
    }
}
function Sort1(){
    if(NumberBank.length > 0){
        const number = NumberBank.shift();
        console.log("popped number: ",number);
        numberBank.textContent = NumberBank;
        if(number % 2 === 0){
            Evens.push(number);
            console.log("Evens: ", Evens);
            evenNumbers.textContent = Evens;
        }
        else{
            Odds.push(number);
            console.log("Odds: ", Odds);
            oddNumbers.textContent = Odds;
        }
    }
}
function SortAll(){
    if(NumberBank.length > 0){
        
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('addNumber').addEventListener('submit', toNumberBank);
    numberBank = document.getElementById('NumberBank');
    oddNumbers = document.getElementById('oddNumbers');
    evenNumbers = document.getElementById('evenNumbers');
    const buttonOne = document.getElementById("sortOne");
    const buttonAll = document.getElementById("sortAll");
    buttonOne.addEventListener("click", Sort1);
    buttonAll.addEventListener("click", SortAll);
});