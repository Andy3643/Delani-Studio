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
//mouse over effect
//card 1
let overEffect = document.getElementById("giza-designs");
let onyesha = document.getElementById ("hover-bg")
overEffect.addEventListener("mouseover", ()=>{
    onyesha.style.display = "block";
})
overEffect.addEventListener("mouseout", ()=>{
    onyesha.style.display = "none";
})
//card 2
let overEffect2 = document.getElementById("ontonio-security");
let showOntonio = document.getElementById("ontonio-bg");
overEffect2.addEventListener("mouseover",()=>{
    showOntonio.style.display ="block";
})
overEffect2.addEventListener("mouseout",()=>{
    showOntonio.style.display ="none";
})
//card 3
let overEffect3 = document.getElementById("orange-diamonds");
let showOrangeDiamonds = document.getElementById("orange-bg");
overEffect3.addEventListener("mouseover",()=>{
    showOrangeDiamonds.style.display ="block";
})
overEffect3.addEventListener("mouseout",()=>{
    showOrangeDiamonds.style.display ="none";
})
//card 4
let overEffect4 = document.getElementById("phone-app");
let showPhoneApp = document.getElementById("phone-bg");
overEffect4.addEventListener("mouseover",()=>{
    showPhoneApp.style.display ="block";
})
overEffect4.addEventListener("mouseout",()=>{
    showPhoneApp.style.display ="none";
})
//card 5
let overEffect5 = document.getElementById("elana-website");
let showElanaWeb = document.getElementById("elana-bg");
overEffect5.addEventListener("mouseover",()=>{
    showElanaWeb.style.display ="block";
})
overEffect5.addEventListener("mouseout",()=>{
    showElanaWeb.style.display ="none";
})
// card 6
let overEffect6 = document.getElementById("word-press");
let showWordPress = document.getElementById("word-bg");
overEffect6.addEventListener("mouseover",()=>{
    showWordPress.style.display ="block";
})
overEffect6.addEventListener("mouseout",()=>{
    showWordPress.style.display ="none";
})
//card 7
let overEffect7 = document.getElementById("burned-coffee");
let showBurnedCoffee = document.getElementById("burned-bg");
overEffect7.addEventListener("mouseover",()=>{
    showBurnedCoffee.style.display ="block";
})
overEffect7.addEventListener("mouseout",()=>{
    showBurnedCoffee.style.display ="none";
})
//card 8
let overEffect8 = document.getElementById("giraffe-resturant");
let showGirraffeResturant = document.getElementById("giraffe-bg");
overEffect8.addEventListener("mouseover",()=>{
    showGirraffeResturant.style.display ="block";
})
overEffect8.addEventListener("mouseout",()=>{
    showGirraffeResturant.style.display ="none";
})