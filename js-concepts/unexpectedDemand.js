function filledOrders(order, k) {
    // Write your code here
    let counter = 0;
    order.forEach(element => {   
        if(element <= k) {
            counter++;
            k = k - element;
        }
    });
    return counter;
}

console.log("filledOrders -> filledOrders", filledOrders([10,30,20], 40));