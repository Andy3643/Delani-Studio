let designText = document.getElementById("our-design");
let developText = document.getElementById("develop");
let productText = document.getElementById("product");

let designIcon = document.getElementById("design-icon");
designIcon.addEventListener("click",()=>{
    designText.style.display = "block";
    designIcon.style.display = "none";
})

let developIcon = document.getElementById("develop-icon");
developIcon.addEventListener("click",()=>{
    developText.style.display = "block";
    developIcon.style.display = "none";
})

let productIcon = document.getElementById("product-icon");
productIcon.addEventListener("click",()=>{
    productText.style.display = "block";
    productIcon.style.display = "none";
})