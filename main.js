// faq-accordion-card-main 
let head = document.createElement("h1");
head.innerHTML = "FAQ"
head.style.cssText = "font-size:30px;font-weight:700;"
document.querySelector("main > div:last-child").prepend(head)

let down = false;
let list = document.querySelectorAll("button");
list.forEach(element => {
    element.addEventListener("click",()=>{
        console.log(element.className)
        if(down === false){
        document.getElementById(element.className).style.cssText =
        "display:block;margin-top:10px";
        document.querySelector(`.${element.className} > img`).style.cssText =
        "transform:rotate(180deg);";
        down = true;
        }else if(down === true){
        document.getElementById(element.className).style.cssText =
        "display:none";
        document.querySelector(`.${element.className} > img`).style.cssText =
        "transform:rotate(0deg);";
        down = false;
        }

    })
});