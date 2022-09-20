let btn = document.querySelector(".btn");
let formGroup = document.getElementById("form");
let mainArea = document.getElementById("main-area");
let form1 = document.querySelector(".form1");
let form2 =document.querySelector(".form2");
let form3 = document.querySelector(".form3")
let warningArea = document.getElementById("warning-area");

btn.addEventListener("click", function(){
    if(form1.value=='' || form2.value=='' || form3.value==''){
        warningArea.style.display = "block"
}else{
    formGroup.style.display = " none";
    mainArea.style.display = "block"
    }
})
 

// deposite area code goes here

let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdraw");
let total = document.getElementById("total");
let depoForm = document.querySelector(".depo-form");
let withdrawForm = document.querySelector(".withdraw-form");
let depoBtn = document.querySelector(".depo-btn");
let widthBtn = document.querySelector(".width-btn");

depoBtn.addEventListener("click", function(){
     let depoVAlue = Number.parseInt(depoForm.value);
     let depoValue2 = Number.parseInt(deposit.innerHTML) ;
     deposit.innerHTML = depoValue2 + depoVAlue ;

    //   total depost balance 
    let totalDeposit = Number.parseInt(total.innerHTML);
    total.innerHTML = totalDeposit + depoVAlue

});

//  withdrW CODE GOES HERE 
widthBtn.addEventListener("click", function(){
    withValue = Number.parseInt(withdrawForm.value);
    withValue2 = Number.parseInt(withdraw.innerHTML) ;
    withdraw.innerHTML = withValue + withValue2 ;

    //  total balance 
    let totalBalance = Number.parseInt(total.innerHTML);
    total.innerHTML = totalBalance - withValue;
})
