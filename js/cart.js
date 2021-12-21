"use strict";

let cartChekoutBtn = document.querySelector("#cart-chekout");
let removeCourse = document.querySelectorAll(".remove-cart-course");

for(let i of removeCourse){
   i.addEventListener("click", ()=>{
      i.parentElement.remove();
   });
}

// removeCourse

cartChekoutBtn.addEventListener('click', ()=>{
   let paymentCrd = document.querySelector("#payment-crd-wrap");
   let checkOutCrd = document.querySelector("#check-out-crd");
   paymentCrd.setAttribute("style",`display: block!important;`)
   checkOutCrd.setAttribute("style",`display: none;`)
});