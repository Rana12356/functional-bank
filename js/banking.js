
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat(inputFieldText);
     // clear input field value 
     inputField.value = '';
    return inputAmount;
}

function getTotalField(totalFieldId, amount){
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const totalFieldAmount = parseFloat(totalText);
    totalField.innerText = totalFieldAmount + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-input');
    /* const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText); */
    const balanceTotalAmount = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + amount;
    } 
    else{
        balanceTotal.innerText = balanceTotalAmount - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositText = depositInput.value;
    // const newDepositAmount = parseFloat(depositText);

    // deposit amount section
   /*
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositTotalAmount + newDepositAmount;
    */

    //balance total 
    /*  
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + newDepositAmount; 
    */
   const newDepositAmount = getInputValue('deposit-input');
   if(newDepositAmount > 0){
    getTotalField('deposit-total', newDepositAmount);
    updateBalance(newDepositAmount, true);
   }
});

// withdraw section work 

document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    //withdraw amount section
    /*
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount; 
    */

    // balance update through withdraw 
    /* 
    const balanceWithdraw = document.getElementById('balance-input');
    const balanceWithdrawText = balanceWithdraw.innerText;
    const balanceWithdrawAmount = parseFloat(balanceWithdrawText);
    balanceWithdraw.innerText = balanceWithdrawAmount - withdrawAmount;
    */
   const withdrawAmount = getInputValue('withdraw-input');
   const currentBalance = getCurrentBalance();
   if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    getTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
   }
});