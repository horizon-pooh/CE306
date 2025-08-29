let buyer = 1000;
let fee = 50;
let percent = 10;
let Discount = buyer * (percent/100);
let all = buyer - Discount

if (all == 0) {
    console.log(" 0 บาท ")
} else if (all <= 500 ) {
    allprice = all + fee;
    console.log(allprice)
} else {
    allprice = all - (all * (10/100));
    console.log(allprice);
}