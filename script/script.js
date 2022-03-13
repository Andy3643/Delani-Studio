let designText = document.getElementById("our-design");
let developText = document.getElementById("develop");
let productText = document.getElementById("product");

let designIcon = document.getElementById("design-icon");
let developIcon = document.getElementById("develop-icon");
let productIcon = document.getElementById("product-icon");
//To display what we do descriptions
designIcon.addEventListener("click",()=>{
    designText.style.display = "block";
    designIcon.style.display = "none";
})

developIcon.addEventListener("click",()=>{
    developText.style.display = "block";
    developIcon.style.display = "none";
})

productIcon.addEventListener("click",()=>{
    productText.style.display = "block";
    productIcon.style.display = "none";
})
// To hide text description and display icons.
designText.addEventListener("click",()=>{
    designIcon.style.display = "block";
    designText.style.display = "none";
})
developText.addEventListener("click",()=>{
    developIcon.style.display = "block";
    developText.style.display = "none";
})
productText.addEventListener("click",()=>{
    productIcon.style.display = "block";
    productText.style.display = "none";
})