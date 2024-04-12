let foot__span  = document.querySelector(".footer__li span");
let more__foot_section = document.querySelector(".footer__more");

foot__span.onclick = function() {
    foot__span.classList.toggle("active");
    more__foot_section.classList.add("active");
}

window.onclick = function(e) {
    if(!foot__span.contains(e.target) && !more__foot_section.contains(e.target)) {
        foot__span.classList.remove("active");
        more__foot_section.classList.remove("active");
    }
}