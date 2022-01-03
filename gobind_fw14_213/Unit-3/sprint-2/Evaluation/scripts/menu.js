let url =  "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian";
   let cartarr = JSON.parse(localStorage.getItem("cartDB"))||[];
   
   let cartNum = document.getElementById("cartNum");
   cartNum.innerHTML = cartarr.length ;
   async function getMenu(){
       try{
        let response = await fetch(url);
       let data  = await response.json();
       showMenu(data.meals);
       console.log(data.meals);
       }
       catch(err){
           console.log(err);
       }
   }
   getMenu(url);

   function showMenu(arr){
    arr.forEach(function(el,index){
        var dishDiv = document.createElement("div");

        var name = document.createElement("h2");
        name.innerText = el.strMeal;

        var img = document.createElement("img");
        img.src = el.strMealThumb;

        var price = document.createElement("p");
        var priceA = Math.floor(Math.random()*400)+100 +" ₹";
        price.innerText = priceA;

        var cartBtn = document.createElement("button");
        cartBtn.innerText = "Add to Cart";
        cartBtn.addEventListener("click",function(){
            var prod = {
                item:name.innerText,
                price:price.innerText,
            }
            cartarr.push(prod);
            localStorage.setItem("cartDB",JSON.stringify(cartarr));
            cartNum.innerHTML = cartarr.length ;
        });

        dishDiv.append(img,name,price,cartBtn);
        document.getElementById("menuGrid").append(dishDiv);
    });
   }


   function gotToCart(){
       window.location.href = "cart.html";
       }