products = [
   {
    food:"Beef",price:350,discount:0.1
   },
   {
    food:"Fish",price:100,discount:0.1
   },
   {
    food:"dry Beef",price:300,discount:0.1
   },
   {
    food:"egg",price:500,discount:0.1
   },
   {
    food:"Cake",price:600,discount:0.1
   }

]
function calculateTotal() {
    let total = 0;

    products.forEach((product) => {
        const discountedPrice = product.price - (product.price * product.discount);
        console.log(`Food: ${product.food}   Price after discount: $${discountedPrice.toFixed(2)}`);
        total += discountedPrice;
    });

    console.log(`\nTotal price after discount: $${total.toFixed(2)}`);
}

calculateTotal();
