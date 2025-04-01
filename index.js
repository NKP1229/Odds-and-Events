// TODO: this file! :)
const NumberBank = [];
let numberBank;
function toNumberBank(event) {
    event.preventDefault();
    try {
        const number = document.getElementById('number').value;
        NumberBank.push(number);
        console.log(NumberBank);
        numberBank.textContent = NumberBank;
    }
    catch(error){
        console.error(error.message);
        alert('There was an error submitting the form.');
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('addNumber').addEventListener('submit', toNumberBank);
    numberBank = document.getElementById('NumberBank');
});