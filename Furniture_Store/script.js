
let toggleBtn = document.querySelector("#toggleBtn");
let isLight = true;
let section1 = document.querySelector(".section_1");
let section2 = document.querySelector(".section_2");
let section3 = document.querySelector(".section_3");
let cardSection = document.querySelector(".card_section");
let body = document.querySelector("body");
let toggle = document.querySelector(".toggle");
let all = document.querySelector('*');
let ul  = document.querySelector(".navbar h1");
toggleBtn.addEventListener('click',()=>{
       if(isLight == true){
          all.style.color ="white";
          ul.style.color ="black";
          body.style.backgroundColor = "#181d25";
          section1.style.backgroundColor ="#181d25";
          section2.style.backgroundColor ="#181d25";
          section3.style.backgroundColor ="#181d25";
          cardSection.style.backgroundColor = "#181d25";
          toggle.innerHTML = "<i class='bx bx-moon'></i>";

          isLight = false; 
       }
       else{
          all.style.color = "black"; 
          body.style.backgroundColor = "white";
          section1.style.backgroundColor ="white";
          section2.style.backgroundColor ="white";
          section3.style.backgroundColor ="white";
          cardSection.style.backgroundColor = "white";
          toggle.innerHTML = "<i class='bx bx-sun'></i>";
          isLight = true; 
       }      
})
