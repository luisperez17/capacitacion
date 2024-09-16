const valor = window.location.search;
const urlParams = new URLSearchParams(valor);
var numMenu = urlParams.get("menu");
if (numMenu == 3) {
    document.getElementById("menu3m").classList.add("active");
    document.getElementById("menu3").classList.add("active", "show");
} else {
    document.getElementById("menu4m").classList.add("active");
    document.getElementById("menu4").classList.add("active", "show");
}

    