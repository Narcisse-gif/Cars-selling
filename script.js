var menu_toggle = document.querySelector('.menu_toggle');
var menu = document.querySelector('.menu');
var menu_toggle_span = document.querySelector('.menu_toggle span');

menu_toggle.onclick = function(){
    menu_toggle.classList.toggle('active');
    menu_toggle_span.classList.toggle('active');
    menu.classList.toggle('responsive');
}

function openForm() {
    document.getElementById("loginForm").style.display = "block";
}

function closeForm() {
    document.getElementById("loginForm").style.display = "none";
}

function openPoppup() {
    document.getElementById("poppup").classList.add("open-poppup");
}

function closePoppup() {
    document.getElementById("poppup").classList.remove("open-poppup");
}

function handleSubmit(event) {
    event.preventDefault();
    openPoppup();
    document.getElementById("bookingForm").reset();
}