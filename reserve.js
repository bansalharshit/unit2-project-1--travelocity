
    var array1=JSON.parse(localStorage.getItem("bookdata"))||[];
    var sum=0;
var praveenk=array1.reduce(function(acc,ele){
    sum=sum+Number(ele.price);
},0)
console.log(sum);
document.querySelector("#total").innerText="Total Amout"+"-"+"💰"+sum
    praveenkumar(array1);
    
    function praveenkumar(data){
        data.forEach(function(ele,index){
            var box=document.createElement("div");

            var one=document.createElement("img");
            one.setAttribute("src",ele.image);

            var two=document.createElement("h3");
            two.innerText=ele.name;

            var three=document.createElement("h4");
            three.innerText=ele.place;

            var four=document.createElement("p");
            four.innerText=ele.rating;

            var five=document.createElement("p");
            five.innerText=ele.price;

            var six=document.createElement("button");
            six.innerText="Delete";
            six.style.cursor="pointer";
            six.addEventListener("click",function(){
                trolls(ele,index);
            })

            var seven=document.createElement("button");
            seven.innerText="Book-Now";
            seven.style.cursor="pointer";
            seven.addEventListener("click",function(){
                venkataramanaswamy();
            })

            box.append(one,two,three,four,five,six,seven);

            document.querySelector("#swamy").append(box)
        })
    }

    function trolls(ele,index){
        array1.splice(index,1);
        localStorage.setItem("bookdata",JSON.stringify(array1));
        window.location.reload();
    }

    function venkataramanaswamy(){
        window.location.href="payment.html"
    }