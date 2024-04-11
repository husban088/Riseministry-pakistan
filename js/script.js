

let nav__span  = document.querySelector("#nav__span ");
let more__section = document.querySelector(".more__section");

nav__span.onclick = function() {
    nav__span.classList.toggle("active");
    more__section.classList.add("active");
}

document.onclick = function(e) {
    if(!nav__span.contains(e.target) && !more__section.contains(e.target)) {
        nav__span.classList.remove("active");
        more__section.classList.remove("active");
    }
}