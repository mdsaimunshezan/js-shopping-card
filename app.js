
function getCount(inputType, prodectPrice, isInc, myPrice) {
    const quantity = document.getElementById(inputType);
    let quantityValue = quantity.value;
    if (isInc) {
        quantityValue = parseInt(quantityValue) + 1;
    }
    else if (quantityValue > 0) {

        quantityValue = parseInt(quantityValue) - 1;

    }
    quantity.value = quantityValue;


    //update price
    const price = document.getElementById(myPrice);
    price.innerText = quantityValue * prodectPrice;

    calcTotal();

}

function getInputValue(inputFild){
    const phoneInput = document.getElementById(inputFild);
    const phoneValue = parseInt(phoneInput.value);
    return phoneValue;
}

function calcTotal(){
   
    const phoneTotal = getInputValue("quantity") * 1219;
    const caseTotal = getInputValue("case-input") * 59;
    const subTotal = phoneTotal + caseTotal;
    const texAmount = Math.round(subTotal * (10 / 100));
    const totalPrice = subTotal + texAmount;
    //update Dom

    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tex-amount").innerText = texAmount;
    document.getElementById("total").innerText = totalPrice;
}



document.getElementById("increment").addEventListener("click", function () {

    getCount("quantity", 1219, true, "price");

});

document.getElementById("decrement").addEventListener("click", function () {

    getCount("quantity", 1219, false, "price");
})


// case section

document.getElementById("case-inc").addEventListener("click", function () {
    getCount("case-input", 59, true, "case-price");
});

document.getElementById("case-dec").addEventListener("click", function () {
    getCount("case-input", 59, false, "case-price");
});