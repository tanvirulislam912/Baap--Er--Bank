// console.log('login in js file')
document.getElementById('btn-submit').addEventListener('click', function(){
   // console.log('submit button clicked');
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   // console.log(email);

   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
   // console.log(email , password);
   if(email === 'sontan@baap.com' && password === 'secret'){
    // console.log('valid user')
    window.location.href = 'bank.html';
   }
   else{
    alert('invalid password')
   }



})