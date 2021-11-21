"use strict";
// course card whish list heart
let wishHeart = document.querySelectorAll(".wish-heart");
for (const iterator of wishHeart) {
    iterator.addEventListener("click",()=>{
        iterator.classList.toggle("active");
    });
}