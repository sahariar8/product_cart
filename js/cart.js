let count = 0;
let sum = 0;
function btn(target){
    const find = target.children[2].innerText;
    
    const find2 = target.children[3].innerText;
    const intFindValue = parseInt(find2);
    //   
    
   const cart = document.getElementById("cart");
   const element = document.createElement("tr");
   element.innerHTML =`<td>${(count+=1)}.</td>    
                       <td>${find}</td>`
                       ;
    cart.appendChild(element);
   
    // 
    const tPrice = document.getElementById("total");
    const tvalue = tPrice.innerText;
    const intvalue = parseInt(tvalue);
    
    // 
    const total = intvalue + intFindValue;
    // const total = parseInt(intvalue) + intFindValue;
    tPrice.innerText = total.toFixed(2);
    
     //TOTAL PRICE WITHOT DISCOUNT
     document.getElementById("afterDiscount").innerText = tPrice.innerText;

    //
    if(tPrice.innerText > 0){
        const btn = document.getElementById("purchase");
        btn.classList.remove("btn-disabled")
    }
    if(tPrice.innerText > 200){
        const cupon = document.getElementById("cupon");
        cupon.classList.remove("btn-disabled");
    }
      document.getElementById("cupon").addEventListener("click",function(e){
        //input Field catch
        const inputValue = document.getElementById("field").value;
            if(inputValue === "SELL200"){
                const discount = tPrice.innerText * .2;
                document.getElementById("discount").innerText = discount.toFixed(2);
                const afterDiscountPrice = tPrice.innerText - discount;
                document.getElementById("afterDiscount").innerText = afterDiscountPrice.toFixed(2);
        }
        else
        {
            alert("Please Enter Valid Promo Code");
            document.getElementById("field").value = "";
                
        }
              
  })
  document.getElementById("home").addEventListener("click", function(){
    location.reload();
  })
 
    
}
