// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
    const hero =
    document.querySelector("hero");
    hero.style.opacity ="0"
    hero.styletransform = "translateY(30px";
    setTimeout(() => {
        hero.style.transition ="all is ease";
        hero.style.opacity ="1";
        hero.style.transform ="translateY(0)";
    }, 200);
});
const button =
document.querySelector("hero button");
buttom.addEventListener("click",() => {
    alert("Welcome! Thanks for visiting my landing page.");
});
const viewMyprojectBtn =
document.getElementById("viewMyprojectBtn");
viewMyprojectBtn.addEventListener("click", function () 
{document.getElementById("features").scrollIntoView({behavior: "smooth"})})