$(document).ready(function() {
  $('.VideoDeYoutube').on('hidden.bs.modal', function() {
      var $this = $(this).find('iframe'),
      srcTemporal = $this.attr('src');
      $this.attr('src', "");
      $this.attr('src', srcTemporal);
  });
});