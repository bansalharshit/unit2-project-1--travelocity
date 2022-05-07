
document.querySelector("form").addEventListener("submit",myfun);

function myfun(){
    event.preventDefault();
    var objone={
        inputone:harshit.jan4.value,
        inputtwo:harshit.jan5.value,
        inputthree:harshit.jan6.value,
        inputfour:harshit.jan7.value,
    }
    localStorage.setItem("seeingdata",JSON.stringify(objone));
    window.location.href="hotel.html"
}