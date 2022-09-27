const inputDate=document.querySelector("#input-date")
const inputNum=document.querySelector("#input-num")
const checkButton=document.querySelector("#check-button")
const output=document.querySelector("#output")
const errormsg=document.querySelector("#error-message")


checkButton.addEventListener("click", checkButtonHandler)

function checkButtonHandler(){

if(1000>inputNum.value>0){
   var dob=inputDate.value
   var sum = 0;
   dob=dob.replaceAll("-","")
   console.log(dob)
   for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i))
   }
   console.log(sum)

   if(sum%inputNum.value===0){
    var lucky = "Your Birthday is Lucky 😊 !"
    output.innerText=lucky
   }
    else{
        var notlucky = "Your Birthday not so Lucky 😔 !"
        output.innerText=notlucky
    }

    
}
else{
    errormsg.innerText="⚠️ lmao "
}

}
