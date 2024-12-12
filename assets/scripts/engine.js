function switchTheme(){
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}

document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    function toggleMenu(){
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    }

    if(menuToggle){
        menuToggle.addEventListener("click", toggleMenu);
    }

    function handleResize(){
        if(window.innerWidth > 480){
            menu.style.display = "flex";
        }else{
            menu.style.display = "none";
        }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

});