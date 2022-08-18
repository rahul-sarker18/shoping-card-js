// case masajment stard
function updatCasNumber(isTrue){
    const casNumberFild = document.getElementById('cas-number-fild');
    const casNumberFildString = casNumberFild.value;
    const privasCasnumber = parseInt(casNumberFildString);

    let newCasNumber;

    if(isTrue == true){
       newCasNumber = privasCasnumber +1;
    }else{
        newCasNumber =privasCasnumber -1;
    }

    casNumberFild.value = newCasNumber;
    
 return newCasNumber;

}
// backpart + click handelar add
document.getElementById('btn-cas-plus').addEventListener('click', function(){
  const newCasNumber= updatCasNumber(true);

  const sum = newCasNumber * 59;

  const casTotalPrice = document.getElementById('cas-total');
  casTotalPrice.innerText =sum;
})
// same backpart - click handelar add 
document.getElementById('btn-cas-minus').addEventListener('click', function(){
   const newCasNumber = updatCasNumber(false);
   const sum = newCasNumber * 59;

  const casTotalPrice = document.getElementById('cas-total');
  casTotalPrice.innerText =sum;
})


// mobil-phone stard 
function mobilPhone(real){
    const phoneFild = document.getElementById('phone-number-fiold');
    const phoneString= phoneFild.value;
    const newPhone = parseInt(phoneString);

    let newPhoneNumber;

    if(real == true){
         newPhoneNumber =newPhone +1;
    }else{ 
         newPhoneNumber =newPhone - 1
    }

    phoneFild.value = newPhoneNumber;

    return newPhoneNumber;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = mobilPhone(true);

   const maltipol = newPhoneNumber * 1219;
   const phoneTotal = document.getElementById('phone-tolal');
   phoneTotal.innerText = maltipol;
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneNumber= mobilPhone(false);

   const maltipol = newPhoneNumber * 1219;
   const phoneTotal = document.getElementById('phone-tolal');
   phoneTotal.innerText = maltipol;
})