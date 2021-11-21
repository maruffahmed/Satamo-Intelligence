"use strict";
//  === header js Start ===
let header = document.querySelector(".header");
window.addEventListener('scroll',()=>{
    if(window.scrollY > 170 ){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
});

// header nav link hover effect
window.addEventListener("load",()=>{
    let  navOpacity = ()=> {
        let navLink = document.querySelectorAll(".header .nav-link");
        for (let iterator of navLink) {
            iterator.addEventListener('mouseenter',()=>{
                for (let i of navLink) {
                    i.setAttribute("style" , "opacity: 0.5;");
                }
                iterator.setAttribute("style" , "opacity:1;");
            });
            iterator.addEventListener('mouseleave',()=>{
                for (let i of navLink) {
                    i.setAttribute("style" , "opacity: 1;");
                }
            });
        }
    }
    if(window.innerWidth > 991){
        navOpacity();
    }
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 991){
            navOpacity();
        }
    });
});






let navbarToggler = document.querySelector(".header .navbar-toggler")
navbarToggler.addEventListener("click" ,()=>{
    if(navbarToggler.classList.contains("collapsed")){
        header.setAttribute("style","")
        document.body.setAttribute("style","overflow:auto;");
    }
    else{
        header.setAttribute("style","background-color: #fff;");
        
        document.body.setAttribute("style","overflow:hidden;");
    }
});

//  *** header js End ***

//  === Footer js Start ===

window.addEventListener("load",()=>{
    let footerDropdown = ()=>{
        if( window.innerWidth <= 480){
            let footerHeading = document.querySelectorAll(".footer-heading");
            function removeClass(){
                for (let i of footerHeading) {
                    i.classList.remove("active");    
                    i.nextElementSibling.setAttribute("style", `height: 0px;`);
                }
            }
            for (let i of footerHeading) {
                i.addEventListener('click', ()=>{
                    if(i.classList.contains("active")){
                        removeClass();    
                    }else{
                        removeClass();    
                        let height = i.nextElementSibling.scrollHeight;
                        i.classList.add("active");
                        i.nextElementSibling.setAttribute("style", `height: ${height}px;`);
                    }
                });
            }
        }
        else{
            let footerHeading = document.querySelectorAll(".footer-heading");
            for (let i of footerHeading) {
                i.classList.remove("active");    
                i.nextElementSibling.removeAttribute("style");
            }
        }
    }

    footerDropdown();
    window.addEventListener('resize', ()=>{
        footerDropdown();
    });
});
//  === Footer js End ===
