/*========================================================
            mac jaScript program Start
  ===================================================== */


/*-----------------------------
 configaration  mac function start 
 -------------------------------------*/
function partsPrice(product,price){
    const memoryCost = document.getElementById(product);
    const  memoryText = memoryCost.innerText ;
    memoryCost.innerText = price;
    totalPrice();   
}
/*-------------------------------------------
 configaration  mac function Ends 
 --------------------------------------*/

/*-------------------------------
 memory handlers start-
 --------------------------------- */

document.getElementById('8gb-memory').addEventListener('click',function(){
partsPrice('memory-cost', 00);

})
document.getElementById('16gb-memory').addEventListener('click',function(){
partsPrice('memory-cost',180);

})
/*--------------------------------------
 memory handlers Ends 
 --------------------------------------*/


/*--------------------------
 Storage handlers start 
 ----------------------------*/
document.getElementById('256gb-ssd').addEventListener('click',function(){

    partsPrice('storage-cost', 00);

})
document.getElementById('512gb-ssd').addEventListener('click',function(){
    partsPrice('storage-cost',100);

})
document.getElementById('1tb-ssd').addEventListener('click',function(){
    partsPrice('storage-cost',180);
})

/*---------------------------
 Storage handlers Ends       
 ------------------------------*/

/*-----------------------------
 delivery-charge  handlers Start 
 --------------------------------*/
document.getElementById('free-deliver').addEventListener('click',function(){
partsPrice('delivery-charge', 00);

});

document.getElementById('cost-delivery').addEventListener('click',function(){
    partsPrice('delivery-charge', 20);
})

/*-----------------------------
 delivery-charge  handlers Ends 
 ---------------------------------*/


/*---------------------------
 total partsPrice Starts
 -----------------------------*/

function inputPartsPrice(productId){
    const productCost = document.getElementById(productId);
    const  productValue = productCost.innerText ;
    const productTotal = parseInt(productValue);
    return productTotal;
};

function totalPrice(){ 
const bestPrice = inputPartsPrice('best-price');
const memoreyCost = inputPartsPrice('memory-cost');
const storageCost = inputPartsPrice('storage-cost');
const deliveryCost = inputPartsPrice('delivery-charge');
const totalAmmount = memoreyCost + storageCost + deliveryCost + bestPrice;
document.getElementById('total-discounts').innerText =totalAmmount;
document.getElementById('total-price').innerText = totalAmmount;
};

/*------------------------
 total partsPrice Ends
 ------------------------- */

/*-----------------------
 coupon code handlers Start
 -------------------------- */
document.getElementById('btn-coupon').addEventListener('click',function(){
    const couponInput = document.getElementById('coupon-input');
    const copunCode = couponInput.value;
    const couponPrice =  document.getElementById('total-price');
    const totalCouponPrice = couponPrice.innerText;
    const totalAmmount =parseFloat( totalCouponPrice);
    const totalCouponDiscount = document.getElementById('total-discounts');
 if(copunCode == "stevekaku"){
        const discounts = (totalAmmount*20) /100;
        const totalDiscount = totalAmmount - discounts ;
        totalCouponDiscount.innerText = totalDiscount;
        couponInput.value = '';
    }
});

/*-----------------------
 coupon code handlers Ends
 -------------------------- */


/*========================================================
            mac jaScript program Ends
  ===================================================== */