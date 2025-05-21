let allUserInfo = []
let loginForm = document.querySelector(".log-in");
let allloginInput = loginForm.querySelectorAll("input");
let loginBtn = loginForm.querySelector("button");


// gtetting data from localstorage

if (localStorage.getItem("allUserInfo") != null) {
    allUserInfo = JSON.parse(localStorage.getItem("allUserInfo"))
}
console.log(allUserInfo);

loginForm.onsubmit = (e) => {
    e.preventDefault();
   if(allloginInput[0].value != "")
   {
    if(allloginInput[1].value != "")
    {
        // check email in your database
        if (allloginInput[1].value != "") {
            let checkEmail = allUserInfo.find((data) => {
                return data.email == allloginInput[0].value
            });
         
               // match password
               if(checkEmail != undefined)
                {
                    if(checkEmail.password == allloginInput[1].value)
                        {
                            loginBtn.innerText = "Processing.....";
                            setTimeout(()=>{
                                loginBtn.innerText = "Login";
                                window.location = "profile/profile.html"
                                checkEmail.password = null;
                                sessionStorage.setItem("__ps__",JSON.stringify(checkEmail));
                               },500)
                        }
                        else{
                            swal("Warning","Worng Password !",'warning');
                        }
                }
                else{
                    swal("Warning","Worng Email !",'warning');
                }
    }
    else
    {
        swal("Warning", "Email is empty !",'warning');
    }
   }

else{
    swal("Warning","Password is Empty !",'warning');
}
     
}
}