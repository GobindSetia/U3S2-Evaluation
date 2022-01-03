let cartarr = JSON.parse(localStorage.getItem("cartDB"))||[];

    showCart(cartarr);
    function showCart(cartarr){
        document.getElementById("cartGrid").innerHTML = "";
    cartarr.map(function(el,index){
        
        var dishDiv = document.createElement("div");

        var name = document.createElement("h2");
        name.innerText = el.item;

        var price = document.createElement("p");
        price.innerText = el.price;

        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete from Cart";
        deleteBtn.addEventListener("click",function(){
            deleteItem(index)
        });

        dishDiv.append(name,price,deleteBtn);
        document.getElementById("cartGrid").append(dishDiv);
    });
   }
   function deleteItem(index){
    
       cartarr.splice(index,1);
       localStorage.setItem("cartDB",JSON.stringify(cartarr));
       showCart(cartarr);
   }

   function totalPrice(cartarr){
       var sum = 0;
    for(var l=0;l<cartarr.length;l++){
        sum += +cartarr[l].price.split(" ")[0]; 
        
    }
    document.getElementById("total").innerHTML = `Total amount to be paid ${sum} ₹`;
    localStorage.setItem("totalPrice",JSON.stringify(sum));
   }
   totalPrice(cartarr);