function orderMeal(event){
    event.preventDefault();
    alert("Your order has been placed");
    setTimeout(mealCook,3000);
    setTimeout(orderReady,8000);
    setTimeout(delivery,10000);
    setTimeout(delivered,12000);
}

function mealCook(){
    alert("Your order is being cooked ");
}

function orderReady(){
    alert("Your order is ready");
}

function delivery(){
    alert("Order out for delivery ");
}

function delivered(){
    alert("Order delivered");
}
