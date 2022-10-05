const inputDate=document.querySelector("#input-date")
const inputNum=document.querySelector("#input-num")
const checkButton=document.querySelector("#check-button")
const output=document.querySelector("#output")
const errormsg=document.querySelector("#error-message")


checkButton.addEventListener("click", checkButtonHandler)

function checkButtonHandler(){
    if(inputDate.value!==""){
        if(inputNum.value!==""){
            if(inputNum.value>0){

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
    var lucky = "Congratulations ! Your Number is Lucky 😊 !"
    output.innerText=lucky
   }
    else{
        var notlucky = "Unfortunately, Your number is not so lucky 😔 !"
        output.innerText=notlucky
    }

    
}
else{
    errormsg.innerText="Error ! Enter proper Input! "
}

}
}}}