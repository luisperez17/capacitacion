const menuLateralbtn = document.querySelector('#menu_on');
const menuLateralcontainer = document.querySelector('#profesores');
const menuLateralclose = document.querySelector('#menu_lateral_close');
if(menuLateralbtn){
  menuLateralbtn.addEventListener('click', function() {
    if(menuLateralcontainer.classList.contains('visible_menu')) {
      menuLateralcontainer.classList.remove('visible_menu');
    } else {
      menuLateralcontainer.classList.add('visible_menu');
    }
  });

  menuLateralclose.addEventListener('click', function() {
    menuLateralcontainer.classList.remove('visible_menu');
  })
}