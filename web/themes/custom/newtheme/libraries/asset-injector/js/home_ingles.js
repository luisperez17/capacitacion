var bloqueFinanciacion=document.querySelector(".bloque-financiacion");
var bloqueFamilia =document.querySelectorAll(".familia-item");
var bloqueFuncionario =document.querySelectorAll(".funcionario-item");
var bloqueEnlacesDirectos =document.querySelectorAll(".be-directos");
var itemMprogram =document.querySelectorAll(".item-mprogram");
 var urhome = window.location.pathname;
 var vector =urhome.split("/");
 
 if(vector[1]=="en")
 {
 	itemMprogram[0].classList.add("d-none");
 	itemMprogram[1].classList.add("d-none");
 	itemMprogram[2].classList.add("d-none");
 	itemMprogram[3].classList.add("d-none");
 	itemMprogram[4].classList.add("d-none");
 	itemMprogram[5].classList.add("d-none");
 	itemMprogram[6].classList.add("d-none");
 	itemMprogram[7].classList.add("d-none");
 	itemMprogram[8].classList.add("d-none");
 	itemMprogram[9].classList.add("d-none");
 	itemMprogram[10].classList.add("d-none");
 	itemMprogram[11].classList.add("d-none");
 	itemMprogram[12].classList.add("d-none");
 	itemMprogram[13].classList.add("d-none");
 	itemMprogram[14].classList.add("d-none");
 	itemMprogram[15].classList.add("d-none");
 	itemMprogram[16].classList.add("d-none");
 	itemMprogram[17].classList.add("d-none");
 	itemMprogram[18].classList.add("d-none");
 	itemMprogram[19].classList.add("d-none");
 	itemMprogram[20].classList.add("d-none");
 	itemMprogram[21].classList.add("d-none");
 	bloqueFinanciacion.classList.add("d-none");
 	bloqueFamilia[0].classList.add("d-none");
 	bloqueFamilia[1].classList.add("d-none");
 	bloqueFuncionario[0].classList.add("d-none");
 	bloqueFuncionario[1].classList.add("d-none");
 	bloqueEnlacesDirectos[0].classList.add("d-none");
 	bloqueEnlacesDirectos[1].classList.add("d-none");
 	bloqueEnlacesDirectos[2].classList.add("d-none");
 	bloqueEnlacesDirectos[3].classList.add("d-none");
 	bloqueEnlacesDirectos[4].classList.add("d-none");
 	bloqueEnlacesDirectos[5].classList.add("d-none");
 	bloqueEnlacesDirectos[6].classList.remove("d-none");
 	bloqueEnlacesDirectos[7].classList.remove("d-none");
 	bloqueEnlacesDirectos[8].classList.remove("d-none");
 }
 