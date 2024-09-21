// step 1: Event handler
document.getElementById('add-cashout-money').addEventListener('click', function(event){
    // prevent page load in the browser
    event.preventDefault();
    // step 2: get money to the account
const cashoutMoney = document.getElementById('input-cashout').value; 
const cashout = parseFloat(cashoutMoney);
// step 3: get the pin number
const pinNumber = document.getElementById('input-cashout-pin').value;
// step 4: verify the pin number in wrong way
if (pinNumber === '1234'){
    console.log('cashout Money added to the account')

    // step 5: add main balance to the account 
const currentCashoutMoney = document.getElementById('balance').innerText;
const mainBalance = parseFloat(currentCashoutMoney); 

// step 6: get the balance after cash out money
const newCashoutBalance = mainBalance - cashout;

// step 6: update the main balance
document.getElementById('balance').innerText = newCashoutBalance;
}


else{
    alert('wrong pin! try again')
}
})