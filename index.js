const btn = document.querySelector(".button-cookie")
const file = document.querySelector(".cookie-file")
const file_line = document.querySelector(".cookie-line")
let value = document.querySelector(".email_value")
let input = document.querySelector(".input_email")
let burger_btn = document.querySelector(".burger-menu")
let burger_wrap = document.querySelector(".burger-menu-wrapper")
let burger_close = document.querySelector(".burger-close")
let loader = document.querySelector(".loader-wrap")

btn.addEventListener("click", button)
input.addEventListener("focus", maillFocus)
input.addEventListener("blur", maillBlure)
burger_btn.addEventListener("click", burger_menu)
burger_close.addEventListener("click", burger_menu_close)

//laoder (loader-wrapper)
    setTimeout(() => {loader.style.transition = ".5s"; loader.style.opacity = "0"}, 1500);
    setTimeout(() => {loader.style.display = "none"}, 1800);

//cookie-block (cookie-file)
function button() {
    file.classList.add("cookie-active1")
    file_line.classList.add("cookie-active2")
}
//footer-block (email)
function maillFocus() {
    value.classList.add("input-active")
}
function maillBlure() {
    value.classList.remove("input-active")
    input.value = ""
}
//burger-menu (for mobile)
function burger_menu() {
    burger_wrap.classList.add("burger-active")
}
function burger_menu_close () {
    burger_wrap.classList.remove("burger-active")
}