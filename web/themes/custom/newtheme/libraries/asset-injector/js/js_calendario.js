var cardCalendario = document.querySelector('.proceso_admision .card');
    var cardBodyCalendario = document.querySelector('.proceso_admision .card-body');
    cardCalendario.addEventListener('click', function (event) {
      if (cardBodyCalendario.style.display === 'none' || cardBodyCalendario.style.display === '') {
        cardBodyCalendario.style.display = 'block';
      } else {
        cardBodyCalendario.style.display = 'none';
      }
});