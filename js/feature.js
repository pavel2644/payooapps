// show the cashout form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){

document.getElementById('cash-out-form').classList.remove('hidden');    

//hide the add button form
document.getElementById('add-money-form').classList.add('hidden');

});

document.getElementById('btn-add-money').addEventListener('click', function(){
    
document.getElementById('add-money-form').classList.remove('hidden');
document.getElementById('cash-out-form').classList.add('hidden');

});
 



 
