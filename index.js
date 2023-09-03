const menu=document.querySelector(".fa");
menu.addEventListener("click",function(){
    let menu = document.querySelector(".dropdown-menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
})
