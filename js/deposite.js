   //console.log('deposite.js');
   document.getElementById('btn-deposite').addEventListener('click',function(){
   // console.log('deposite button clicked');
   
   
   const depositeField = document.getElementById('deposite-field');
   const newDepositeAmountstring  = depositeField.value;
   const newDepositeAmount = parseFloat(newDepositeAmountstring);
   // console.log(typeof newDepositeAmount);
   // console.log(newDepositeAmount);
   
   
   const depositeTotalElement = document.getElementById('deposite-total');
   const previousDepositTotalstring  = depositeTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalstring);
   console.log(typeof previousDepositTotal);
   // console.log(previousDepositTotal);
  
  
   const currentDepositTotal = previousDepositTotal +  newDepositeAmount;
  
   depositeTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement =  document.getElementById('balance-total');
  const previousBalanceTotalString =  balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

   const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotalElement.innerText =  currentBalanceTotal;
    









  depositeField.value = '';

})