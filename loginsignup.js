document.querySelector("#praveen").addEventListener("submit",myfunction);
var array1=JSON.parse(localStorage.getItem("userdata"))||{};
function myfunction(){
    event.preventDefault();
    var obj={
        uname:praveen.sin1.value,
        uemail:praveen.sin2.value,
        upass:praveen.sin3.value
    };
   localStorage.setItem("userdata",JSON.stringify(obj));
   window.location.href="signin.html"
   form.reset(); 
}
var array1=JSON.parse(localStorage.getItem("userdata"))||{};
document.querySelector("#ganesh").addEventListener("submit",myfunction1);
function myfunction1(){
    event.preventDefault();

    var obj2={
        semail:ganesh.log.value,
        spass:ganesh.log1.value,
    }
    if(array1==null){
        alert("Create a account");
    }
    else if(array1.uemail==obj2.semail && array1.upass==obj2.spass){
        alert("Login Successful");
        localStorage.setItem("logindata",JSON.stringify(obj2));
        window.location.href="index.html";
    }
    else{
        alert("User Doesn't Exist ")
    }
}