
function bollo(){
    var select=document.querySelector("#pro1").value;
    if(select=="assen"){
        hotel_data.sort(function(a,b){
            return a.price-b.price
        })
        harshit(hotel_data)
    }
    if(select=="desen"){
        hotel_data.sort(function(a,b){
            return b.price-a.price
        })
        harshit(hotel_data)
    }
    }
    
    function challo(){
    var selec=document.querySelector("#pro2").value;
    if(selec=="asse"){
        hotel_data.sort(function(a,b){
            return a.rating-b.rating
        })
      //  harshit(hotel_data)
      harshit(hotel_data)
    }
    if(selec=="dese"){
        hotel_data.sort(function(a,b){
            return b.rating-a.rating
        })
        harshit(hotel_data)
    }
    }
      var hotel_data = [
        {
          image:
            "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/4000000/3030000/3021000/3020992/286ff2c1_b.jpg",
          name: "The Westin Mumbai Garden City",
          place: "Goregaon",
          tagline: "Handcrafted Urban Getaways within Mumbai",
          facility:
            "Free Pints of Beer,INR 3000 Hotel Credti,Complimentary Breakfast,20% discount on Spa,15% off Food & Beverage,Laundary & more.",
          type1: "Fully refundable",
          type2: "Reserve now pay later",
          rating: "4",
          price: "1438"
        },
        {
          image:
            "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/6000000/5310000/5301700/5301691/42bd346d_b.jpg",
          name: "The St. Regis Mumbai",
          place: "Mumbai",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully  designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Not Refundable",
          type2: "Reseve now pay later",
          rating: "3",
          price: "2955"
        },
        {
          image:
            "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/580000/577900/577808/2b755052_b.jpg",
          name: "ITC Maratha Mumbai",
          place: "Mumbai",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Not Refundable",
          type2: "Reserve now pay later",
          rating: "3",
          price: "1703"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/20000000/19460000/19458500/19458493/a7678da8.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "The Taj Mahal Palace Mumbai",
          place: "Mumbai",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Not Refundable",
          type2: "Reserve now,pay later",
          rating: "4",
          price: "3174"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/19000000/18360000/18354900/18354839/937928c1.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "Awesome Dormitory",
          place: "Mumbai",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Not Refundable",
          type2: "Reserve now, pay later",
          rating: "3",
          price: "4678"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/18000000/17080000/17075500/17075407/35a5a7cb.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "Hotel Galaxy's Vaibhav",
          place: "Vasai West,Mumbai",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Not Refundable",
          type2: "Reserve now,pay later",
          rating: "5",
          price: "1243"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/20000000/19020000/19013300/19013283/ea96d859.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "Hotel Pearl",
          place: "Vashi,Mumbai",
          tagline: "Live move",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Fully refundable",
          type2: "Reseve now, pay later",
          rating: "5",
          price: "1524"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/1000000/440000/438400/438378/fd40d8a9.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "The Leela Goa",
          place: "Cavelossim",
          tagline: "Live Exquisite",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Not Refundable",
          type2: "Reserve now , pay later",
          rating: "3",
          price: "5342"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/3000000/2710000/2703400/2703358/ee766bf2.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "Vivanta Goa,Panjai",
          place: "Panaji",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Not Refundable",
          type2: "Reserve now,pay later",
          rating: "4",
          price: "9556"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/47000000/46210000/46205200/46205118/1583475f.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "Taj Resort,Goa",
          place: "Dona Paula",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Fully refundable",
          type2: "Reserve now,pay later",
          rating: "5",
          price: "2105"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/23000000/22170000/22162200/22162110/97481cbd.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "Morijim Guest House",
          place: "Morijim",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Not Refundable",
          type2: "Reserve now,pay later",
          rating: "3",
          price: "1008"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/77000000/76310000/76301800/76301735/aa346fda.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "Goroomgo Mount De Goa",
          place: "Arambol",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Not Refundable",
          type2: "Reserve now,pay later",
          rating: "4",
          price: "1634"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/70000000/69780000/69772800/69772738/65374ca5.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "Treebo Trend",
          place: "Morijim",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type2: "Reserve now,pay later",
          type1: "Not Refundable",
          rating: "5",
          price: "1905"
        },
        {
          image:
            "https://images.trvl-media.com/hotels/71000000/70970000/70960400/70960394/fa6b4801.jpg?impolicy=resizecrop&rw=455&ra=fit",
          name: "Treebo Trip Vailankanni",
          place: "Merces",
          tagline: "Live Exquisite at The Best Address",
          facility:
            "Immerse Youself in luxuries as you relax in beautifully designed rooms and dine around the globe in our award-winning restaurants",
          type1: "Fully refundable",
          type2: "reserve now,pay later",
          rating: "3",
          price: "2145"
        },
      ];
    
    var array1=JSON.parse(localStorage.getItem("bookdata"))||[];
      harshit(hotel_data);
      function harshit(data) {
        document.querySelector("#hoteldetail").innerHTML="";
        data.forEach(function (ele) {
          var box = document.createElement("div");
    
          var one=document.createElement("img");
          one.setAttribute("id","don")
          one.setAttribute("src",ele.image);
    
          var two=document.createElement("h2");
          two.innerText=ele.name;
    
          var three=document.createElement("h3");
          three.innerText=ele.place;
    
          var four=document.createElement("p");
          four.innerText=ele.tagline;
    
          var five=document.createElement("p");
          five.innerText=ele.facility;
    
          var six=document.createElement("p");
          six.innerText=ele.type1;
    
          var seven=document.createElement("p");
          seven.innerText=ele.type2;
    
          var eight=document.createElement("p");
          eight.innerText=ele.rating+"⭐";
    
          var nine=document.createElement("p");
          nine.innerText="💰"+ele.price;
    
          var ten=document.createElement("button");
          ten.innerText="Reserve";
          ten.style.color="black";
          ten.style.cursor="pointer";
          ten.addEventListener("click",function(){
              praveen(ele);
          })
    
          box.append(one,two,three,four,five,six,seven,eight,nine,ten);
          document.querySelector("#hoteldetail").append(box);
        });
      }
    
      function praveen(ele){
          array1.push(ele);
         localStorage.setItem("bookdata",JSON.stringify(array1));
      }