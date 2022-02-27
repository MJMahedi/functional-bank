function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value; 
    const amountText = parseFloat(inputAmountText);
     //   clear input field 
     inputField.value = '';
    return amountText; 
}
function updateTotalField(totalFieldId ,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText; 
    const previousTotal = parseFloat(totalText);
      totalElement.innerText= previousTotal + amount  ;  

}
function getCurrentBalance(){
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotaltext = balanceTotal.innerText;
  const previosBalancetotal = parseFloat(balanceTotaltext);
  return previosBalancetotal;
}

function updateBalance(amount , isAdd){
  // const balanceTotal = document.getElementById('balance-total');
  //   const balanceTotaltext = balanceTotal.innerText;
  //   const previosBalancetotal = parseFloat(balanceTotaltext);
  const previosBalancetotal = getCurrentBalance();
  
    if(isAdd == true){
      balanceTotal.innerText = previosBalancetotal + amount;
    }
else{
  balanceTotal.innerText = previosBalancetotal - amount;
}
}
//Deposit Field
document.getElementById('deposit-button').addEventListener('click',function(){   
  const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
      updateTotalField('deposit-total',depositAmount);
      updateBalance(depositAmount , true);
    }
    //Get current deposit 
   /*  const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText; 
    const previousDepositTotal = parseFloat(depositTotalText);
      depositTotal.innerText= previousDepositTotal + depositAmount  ;    */ 
         
    //   update Balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotaltext = balanceTotal.innerText;
    const previosBalancetotal = parseFloat(balanceTotaltext);
    balanceTotal.innerText = previosBalancetotal + depositAmount;   */
    
   
});

// WithDraw field 
document.getElementById('withdraw-button').addEventListener('click',function(){

const withdrawAmount = getInputValue('withdraw-input');
const currentBalance = getCurrentBalance();
if(withdrawAmount > 0 && withdrawAmount < currentBalance){
  updateTotalField('withdraw-total',withdrawAmount);
  updateBalance(withdrawAmount , false);
}

// console.log(withdrawAmount);
// Get withdraw amount 
/* const withdrawTotal = document.getElementById('withdraw-total');
const  withdrawTotalText = withdrawTotal.innerText;
const previouswithdrawTotal = parseFloat(withdrawTotalText); 
withdrawTotal.innerText =  withdrawAmount + previouswithdrawTotal;
*/
// Update Balance 
/* const balanceTotal = document.getElementById('balance-total');
const balanceTotaltext = balanceTotal.innerText;
const previosBalancetotal = parseFloat(balanceTotaltext);
balanceTotal.innerText = previosBalancetotal - withdrawAmount ; */
if(withdrawAmount > currentBalance ){
  console.log("you can not withdraw more than your account balance");
}
});
