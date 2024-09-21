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
// verify the pin number(wrong way)

if(pinNnmber === '1234'){
    console.log('Added money to your account') 

// step 4: get the current balance
const currentBalance = document.getElementById('balance').innerText;
console.log(currentBalance)

// add money input with current balance
const addMoneyInput = parseFloat(addAmount);
const balance = parseFloat(currentBalance);
//console.log(addMoneyInput)
//console.log(typeof addMoneyInput)
const newBalance = addMoneyInput + balance;
console.log(newBalance)

// step 6: update the main balance
document.getElementById('balance').innerText = newBalance;

}
else{
    console.log("wrong pin number! Please try again")
}
})