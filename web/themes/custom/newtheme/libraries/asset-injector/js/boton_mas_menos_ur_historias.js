const btnOcultarURH=document.querySelector('.btnURH');
const btnOcultarURH2=document.querySelector('.btnURH2');
const section=document.querySelectorAll('.layout-onecol');
var switchURH=false;
var switchURH2=false;


btnOcultarURH.addEventListener('click', MostrarHistoria);
btnOcultarURH2.addEventListener('click', MostrarHistoria2);

function MostrarHistoria()
{

  if(!switchURH)
  {
  	btnOcultarURH.style.borderRadius="23px";
    switchURH=true;
    section[4].classList.remove('section_urh');
    btnOcultarURH.innerText="VER MENOS...";
  }
  else
  {
  	btnOcultarURH.style.borderRadius="50%";
    switchURH=false;
    section[4].classList.add('section_urh');
    btnOcultarURH.innerText="+";
  }
}

function MostrarHistoria2()
{

  if(!switchURH2)
  {
  	btnOcultarURH2.style.borderRadius="23px";
    switchURH2=true;
    section[8].classList.remove('section_urh2');
    btnOcultarURH2.innerText="VER MENOS...";
  }
  else
  {
  	btnOcultarURH2.style.borderRadius="50%";
    switchURH2=false;
    section[8].classList.add('section_urh2');
    btnOcultarURH2.innerText="+";
  }
}



