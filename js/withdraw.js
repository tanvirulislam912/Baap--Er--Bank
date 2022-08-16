document.getElementById('btn-withdraw').addEventListener('click',function(){
  //  console.log('withdraw button clicked');


   const withdrawField = document.getElementById('withdraw-field');
   const newWithDrawAmountString = withdrawField.value;
   const newWithDrawAmount = parseFloat(newWithDrawAmountString);
   // console.log(newWithDrawAmount);

   
   withdrawField.value = '';

   
   if(isNaN(newWithDrawAmount)){
    alert('please provide a valid number');
    return;
   }


   const withDrawTotalElement = document.getElementById('withdraw-total');
   const previouswithDrawTotalString = withDrawTotalElement.innerText;
   const  previouswithDrawTotal = parseFloat(previouswithDrawTotalString);
   //console.log(previouswithDrawTotal);


   
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // console.log(previousBalanceTotal);


   
    
  
   if(newWithDrawAmount > previousBalanceTotal){
    alert('baap er bank a eto taka nai');
    return;
   }


   const currentWithDrawTotal =  previouswithDrawTotal + newWithDrawAmount;
   withDrawTotalElement.innerText = currentWithDrawTotal;



   const newbalanceTotal = previousBalanceTotal - newWithDrawAmount;
   balanceTotalElement.innerText = newbalanceTotal;

   
   
})