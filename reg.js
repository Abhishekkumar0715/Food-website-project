let allUserInfo =[];
let regForm =document.querySelector(".reg-form");
let allInput = regForm.querySelectorAll("input");
let regBtn = regForm.querySelector("button");

if(localStorage.getItem("allUserInfo") != null)
{
  allUserInfo=JSON.parse(localStorage.getItem("allUserInfo"))
}

regForm.onsubmit = (e) =>{
  e.preventDefault()
  let checkEmail=allUserInfo.find((data) =>{
        return data.email == allInput[1].value
    
  })
  if (checkEmail == undefined) {
      let data={
    
};
for(let el of allInput){
  let key = el.name;
  data[key] = el.value


}
regBtn.innerText = "processing..."
setTimeout(()=>{
  regBtn.innerText = "Register"
  allUserInfo.push(data);
localStorage.setItem("allUserInfo",JSON.stringify(allUserInfo));
 swal("good job...!", 'registration successfull', 'success');
},1000)


  }
  else {
    swal("failed", 'all ready regisetered..!','error');
    console.log(swal);
}
regForm.reset(' ');  

}



