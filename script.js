// Variables 

// for hamburger animation 
hamburgerNavbar = document.querySelector(".ham-nav")
// -----------------------------------------------------




// Adding the hamburger animation 
hamburger.addEventListener("click",()=>{
    hamburgerNavbar.style.display="block"
    setTimeout(() => {
        hamburgerNavbar.style.right = "0"
    }, 0);
})
cross.addEventListener("click",()=>{
    hamburgerNavbar.style.right = "-200%"

    setTimeout(() => {
        hamburgerNavbar.style.display="none"
        
    }, 1000);
})
hamHome.addEventListener("click",()=>{
    hamburgerNavbar.style.right = "-200%"

    setTimeout(() => {
        hamburgerNavbar.style.display="none"
    }, 1000);

})

document.querySelectorAll(".ham-link").forEach((e)=>{
    e.addEventListener("click",()=>{
        setTimeout(() => {
        hamburgerNavbar.style.right = "-200%"

    }, 1000);
        setTimeout(() => {
            hamburgerNavbar.style.display="none"
        }, 2000);
    })
})