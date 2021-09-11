const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#num");
const checkBtn = document.querySelector("#btn");
const output = document.querySelector(".output");


function calculateSum(date){
  var sumOfNumber = 0;
  const modifiedDate = date.replaceAll("-","");
  var temp = modifiedDate;
  while (temp != 0){
    var digit = temp % 10;
    sumOfNumber = sumOfNumber + digit;
    temp = Math.floor(temp / 10);
    
  }
  return sumOfNumber
}

checkBtn.addEventListener("click",function clickHandler(){
  const date = dob.value;
  const lucky = luckyNum.value;
  if (date && lucky){
  const sum = calculateSum(date);
  if((sum % luckyNum.value) ==0)
  {
    output.innerText = lucky+" is lucky number for you 😇 ";
  }
  else
  {
    output.innerText = lucky+" is not a lucky number for you 😞 ";
  }
}
else{
    output.innerText = "Please Enter both values";
}
});
