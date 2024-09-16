//TABS CURSOS UR INTERNACIONAL
   //
   function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("defaultOpen").click();
  
  // script para abrir tabs de internas de contenido tabs
 
 	function tabsUr(clase) {
      let ccp = document.querySelector("."+clase);
      ccp.classList.toggle("active");
      let panelUr = ccp.nextElementSibling;
      if (panelUr.style.maxHeight) {
        panelUr.style.maxHeight = null;
      } else {
        panelUr.style.maxHeight = panelUr.scrollHeight + "px"
      }
    };
      
      

  // script para abrir tabs de internas de contenido tabs
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  

