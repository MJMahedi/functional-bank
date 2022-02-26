

//Deposit Field
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value; 
    const depositAmount = parseFloat(depositAmountText);
    

    // console.log(depositAmount);
    //Get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText; 
    const previousDepositTotal = parseFloat(depositTotalText);
      depositTotal.innerText=depositAmount + previousDepositTotal ;    
      
    //   update Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotaltext = balanceTotal.innerText;
    const previosBalancetotal = parseFloat(balanceTotaltext);
    balanceTotal.innerText = previosBalancetotal + depositAmount;
     depositInput.value = '';
    

});

// WithDraw field 
document.getElementById('withdraw-button').addEventListener('click',function(){
const withdrawinput = document.getElementById('withdraw-input');
const withdrawAmounttext = withdrawinput.value;
const withdrawAmount = parseFloat(withdrawAmounttext);
// const withdrawAmount = getInputValue('withdraw-input');
// console.log(withdrawAmount);
// Get withdraw amount 
const withdrawTotal = document.getElementById('withdraw-total');
const  withdrawTotalText = withdrawTotal.innerText;
const previouswithdrawTotal = parseFloat(withdrawTotalText);

withdrawTotal.innerText =  withdrawAmount + previouswithdrawTotal;

// Update Balance 
const balanceTotal = document.getElementById('balance-total');
const balanceTotaltext = balanceTotal.innerText;
const previosBalancetotal = parseFloat(balanceTotaltext);
balanceTotal.innerText = previosBalancetotal - withdrawAmount ;


//Clear withdraw field
withdrawinput.value = '';

});
