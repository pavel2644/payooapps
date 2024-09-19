// Add Money to the account
// step 1: Event handler
document.getElementById('button-add-money').addEventListener('click', function(event){
    //prevent page reload
    event.preventDefault();
// get money to the account
const addAmount = document.getElementById('input-money').value;
console.log(addAmount);
// get the pin number provided
const pinNnmber = document.getElementById('input-pin-number').value;
console.log(pinNnmber); 
})