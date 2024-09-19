
// step 1: Set Event Handler
document.getElementById('button-login').addEventListener('click', function(event){
    //step 2: prevent reloading browser
      event.preventDefault();
      // step 3: get the phone number
const phoneNumber = document.getElementById('phone-number').value;      
console.log(phoneNumber);
})