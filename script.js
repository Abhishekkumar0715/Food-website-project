  //  all global varibel declaration

// let allUserInfo =[];
// let regForm =document.querySelector(".reg-form");
// let loginForm =document.querySelector(".log-in");
// let allInput =regForm.querySelectorAll("input");
// let allloginInput = loginForm.querySelectorAll("input");
// let regBtn = regForm.querySelector("button");
// let loginBtn =loginForm.querySelector("button");

  //  getting data from localStorage

// if(localStorage.getItem("allUserInfo") !=null){
//   allUserInfo=JSON.parse(localStorage.getItem("allUserInfo"))
// }
// console.log(allUserInfo);

// // regstration coding
// regForm.onsbmit = (e) => {
//   e.preventDefault()
//   let checkEmail=allUserInfo.find((data) =>{
//     return data.email == allInput[4].value
//   })
//   if (checkEmail == undefined) {
//     let data={
//       fullName: allInput[0].value,
//       email: allInput[1].value,
//       location: allInput[2].value,
//       password: allInput[3].value

//     }
//     regBtn.innerText = "processing..."
//     setTimeout(()=>{
//       regBtn.innerText = "registered"
//       allUserInfo.push(data);
//       localStorage.setItem("allUserInfo", JSON.stringify(allUserInfo))
//       swal("well done...", 'registration successfull','success' )

//     },5000)
//   } 
//   regForm.reset(' ');

// }