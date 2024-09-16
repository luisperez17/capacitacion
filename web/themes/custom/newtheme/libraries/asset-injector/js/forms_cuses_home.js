let formCurses = document.querySelector('.section-forms-cursos-ur');
let footerscroll = document.querySelector('.footer').offsetTop;
let formOffet = 400;
let formCursesHeight = formCurses.offsetHeight;
let formDie = footerscroll ;

document.addEventListener("scroll", () => {
  let y = window.scrollY;
   footerscroll = document.querySelector('.footer').offsetTop;
   formDie = footerscroll - formCursesHeight-formOffet ;
  if (screen.width > 769) {
    if (y > formDie && formCurses) {
      formCurses.classList.remove('showCurse');
      formCurses.classList.add('hideCurse');
    } else if (formCurses) {
      formCurses.classList.remove('hideCurse');
      formCurses.classList.add('showCurse');
    }
  }
});