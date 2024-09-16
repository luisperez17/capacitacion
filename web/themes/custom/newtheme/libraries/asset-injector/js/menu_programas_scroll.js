const links = document.querySelectorAll('.menu-color-programa-destok .menu-color-programa-destok_ul li a');

    for (let index = 0; index < links.length - 1; index++) {
      links[index].addEventListener('click', clickHandler);
      
    }

    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop - 120,
        behavior: 'smooth',
      });
    }