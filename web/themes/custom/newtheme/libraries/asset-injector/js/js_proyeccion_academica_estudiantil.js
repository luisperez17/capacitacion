$(document).ready(function(){
  Inicializador();

  //Variables
  //var $APIUrl = "https://guiaacademicabackenddev.azurewebsites.net/"; //Tener en cuenta el slash (/) final
  var $APIUrl = "https://guiaacademicabackend.azurewebsites.net/"; //Tener en cuenta el slash (/) final
  var $rosarioURL = window.location.protocol+"//"+window.location.hostname+"/"; //Tener en cuenta el slash (/) final
  var $textoPorcentajesDoblePrograma = "Este porcentaje representa las asignaturas que comparte su programa con los otros programas recomendados. Entre mayor sea el porcentaje, mÃ¡s fÃ¡cil serÃ¡ realizar su opciÃ³n de doble programa.";
  var $mensajeRespuestaNoMatriculado = "Por favor, ingresa a la <a target='blank' href='https://portalacademico.urosario.edu.co/'>guÃ­a acadÃ©mica primero a travÃ©s del portal SIAR</a>, si el problema persiste registra tu caso en (Servicios 2030) dando <a href='mailto:servicios2030@urosario.edu.co'>clic aquÃ­</a> o al 031 2970200 ext. 2030 puedes tambiÃ©n a travÃ©s intranet de la Universidad, con el fin de que puedan revisar tu estado dentro del sistema.";
  var $mensajeRespuestaDatosGuiaAcademica = "Por favor, acÃ©rcate a la secretaria acadÃ©mica para revisar tu caso y despuÃ©s puedes volver aquÃ­ para ver tu avance, ten en cuenta que el sistema de proyecciÃ³n acadÃ©mica solo estÃ¡ disponible para estudiantes de pregrado.";
  var $mensajeError = "Hubo un error a consultar tu informaciÃ³n, si el problema persiste acÃ©rcate a la secretaria acadÃ©mica para revisar tu caso y despuÃ©s puedes volver aquÃ­ para ver tu avance.";
  var $linkCerrarSesion = "https://login.microsoftonline.com/ae525757-89ba-4d30-a2f7-49796ef8c604/wsfed?wa=wsignout1.0&wtrealm=api://0c18f831-8971-49fb-a7f9-76f6c9eeff46&wreply=https://www.urosario.edu.co";

  //Actuales
  $mencionesDisciplinaresActuales = "";
  $mencionesInterdisciplinaresActuales = "";
  $coterminalesDisciplinaresActuales = "";
  $coterminalesInterdisciplinaresActuales = "";
  $trayectoriasActuales = "";
  $dobleProgramasActuales = "";
  $mostrarDobleProgramaRecomendaciones = false;
  $mostrarMenores = false;
  $menores = ["IET1", "IIN1", "ISE1", "MA01", "MA02", "AQ01", "AR01", "DS01", "CR01"];

  //Recomendaciones
  $mencionesDisciplinaresRecomendaciones = "";
  $mencionesInterdisciplinaresRecomendaciones = "";
  $coterminalesDisciplinaresRecomendaciones = "";
  $coterminalesInterdisciplinaresRecomendaciones = "";
  $trayectoriasRecomendaciones = "";
  $dobleProgramasRecomendaciones = "";

  //Accion de boton con ID #enviarCorreo para comenzar el proceso de Experiencia Estudiantil
  $("#enviarCorreo").click(function(){
    reiniciarContenedores();
    $correoEstudiante = $("#correo").val();
   // $("#login_IN").slideUp();
    // $("#cargando").slideDown();

    mensajeConsola("Inicia consulta de Estudiante con el correo: "+$correoEstudiante);

    $generarToken = {
      "url": $APIUrl+"oauth/token?grant_type=password&username="+$correoEstudiante+"&password=password",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Authorization": "Basic YXBpUmVzdENsaWVudElkOlhZN2ttem9OemwxMDA="
      },
      statusCode: {
        /*401: function(){
          $("#cargando").slideUp();
          $("#login_IN").slideDown();
          $('#textoMensajeRespuesta').html($mensajeRespuestaNoMatriculado);
          $('#mensajeRespuesta').slideDown();
          $('#mensajeRespuesta').addClass("alert-primary");
          mensajeConsola("No hay informaciÃ³n para el Estudiante con el correo: "+$correoEstudiante);
        }*/
      },
      success: function(){
        $("#cargando").slideUp();
        $("#informacion_IN").slideDown();
      }
    };

    $.ajax($generarToken).done(function($token){
      $token = $token.access_token;

      //Creacion de AJAX para InformacionEstudiante
      $informacionEstudiante = {
        "url": $APIUrl+"api/estudiante?correo="+$correoEstudiante,
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer "+$token
        },
        statusCode: {
          /*500: function(){
            $("#cargando").slideUp();
            $("#login_IN").slideDown();
            $('#textoMensajeRespuesta').html($mensajeError);
            $('#mensajeRespuesta').slideDown();
            $('#mensajeRespuesta').addClass("alert-danger");
          }*/
        },
        error: function(){
          /*$("#cargando").slideUp();
          $("#login_IN").slideDown();
          $('#textoMensajeRespuesta').html($mensajeError);
          $('#mensajeRespuesta').slideDown();
          $('#mensajeRespuesta').addClass("alert-danger");*/
        }
      };

      //Creacion de AJAX para InformacionRecomendaciones
      $informacionRecomendaciones = {
        "url": $APIUrl+"apiOrientadorCurricular/recomendaciones?correo="+$correoEstudiante,
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer "+$token
        },
        statusCode: {
          /*401: function(){
            $("#cargando").slideUp();
            $("#login_IN").slideDown();
            $('#textoMensajeRespuesta').html($mensajeRespuestaNoMatriculado);
            $('#mensajeRespuesta').slideDown();
            $('#mensajeRespuesta').addClass("alert-warning");
            mensajeConsola("No hay informaciÃ³n para el Estudiante con el correo: "+$correoEstudiante);
          },
          500: function(){
            $("#cargando").slideUp();
            $("#login_IN").slideDown();
            $('#textoMensajeRespuesta').html($mensajeError);
            $('#mensajeRespuesta').slideDown();
            $('#mensajeRespuesta').addClass("alert-danger");
          }*/
        },
        error: function(){
          /*$("#cargando").slideUp();
          $("#login_IN").slideDown();
          $('#textoMensajeRespuesta').html($mensajeError);
          $('#mensajeRespuesta').slideDown();
          $('#mensajeRespuesta').addClass("alert-danger");*/
        },
        success: function(){
          $("#cargando").slideUp();
          $("#informacion_IN").slideDown();
        }
      };

      $.ajax($informacionEstudiante).done(function($informacionBasica){
        mensajeConsola("La informaciÃ³n bÃ¡sica del estudiante es:");
        mensajeConsola($informacionBasica);
        if($informacionBasica.data[0].nombreCompleto == null){
          $("#cargando").slideUp();
          $("#login_IN").slideDown();
          $('#textoMensajeRespuesta').html($mensajeRespuestaDatosGuiaAcademica);
          $('#mensajeRespuesta').slideDown();
          $('#mensajeRespuesta').addClass("alert-warning");
        }else{
          $nombreEstudiante = $informacionBasica.data[0].nombreCompleto;
          $nivelEstudio = $informacionBasica.data[0].nivelEstudio;
          $codigoPeriodo = $informacionBasica.data[0].codPeriodo;
          $codigoFacultad = $informacionBasica.data[0].datosAcademicos[0].codFacultad;
          $nombreFacultad = $informacionBasica.data[0].datosAcademicos[0].nombreFacultad;
          $programaEstudiante = $informacionBasica.data[0].datosAcademicos[0].nombrePlan;
          $codigoPlan = $informacionBasica.data[0].datosAcademicos[0].codPlan;
          $datosAcademicos = $informacionBasica.data[0].datosAcademicos;

          for($i = 0; $i < $menores.length; $i++){
            if($codigoPlan == $menores[$i]){
              $mostrarMenores = true;
            }
          }

          if($datosAcademicos.length == 1){
            $mostrarDobleProgramaRecomendaciones = true;
            for($i = 0; $i < $datosAcademicos.length; $i++){
              $dobleProgramasActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$datosAcademicos[$i].nombrePlan+"</p><br><p>Mira las recomendaciones para tu doble programa.</p>";
            }
          }else if($datosAcademicos.length == 2){
            $mostrarDobleProgramaRecomendaciones = false;
            for($i = 0; $i < $datosAcademicos.length; $i++){
              $dobleProgramasActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$datosAcademicos[$i].nombrePlan+"</p>";
            }
          }else{
            $dobleProgramasActuales = "<p>No hay dobles programas, puedes ver recomendaciones.</p>";
          }

          //Obtener la informacion de tipoAgrupaciones
          /*$informacionTipoAgrupaciones = {
            "url": $APIUrl+"api/tipoAgrupaciones?nivelEstudio="+$nivelEstudio,
            "method": "GET",
            "timeout": 0,
            "headers": {
              "Authorization": "Bearer "+$token
            },
            statusCode: {
              500: function(){
                $("#cargando").slideUp();
                $("#login_IN").slideDown();
                $('#textoMensajeRespuesta').html($mensajeError);
                $('#mensajeRespuesta').slideDown();
                $('#mensajeRespuesta').addClass("alert-danger");
              }
            },
            error: function(){
              $("#cargando").slideUp();
              $("#login_IN").slideDown();
              $('#textoMensajeRespuesta').html($mensajeError);
              $('#mensajeRespuesta').slideDown();
              $('#mensajeRespuesta').addClass("alert-danger");
            }
          };*/

          /*$.ajax($informacionTipoAgrupaciones).done(function($tipoAgrupaciones){
            for($i = 0; $i < $tipoAgrupaciones.data.length; $i++){
              //mensajeConsola("Agrupacion ACTUAL Estudiante de: "+$tipoAgrupaciones.data[$i].nombreAgrupacion);
              if($tipoAgrupaciones.data[$i].nombreAgrupacion == "Coterminal Disciplinar"){
                //Obtener la informacion de Agrupaciones
                $informacionNucleos = {
                  "url": $APIUrl+"api/nucleos?correo="+$correoEstudiante+"&categoria="+$tipoAgrupaciones.data[$i].nombreAgrupacion,
                  "method": "GET",
                  "timeout": 0,
                  "headers": {
                    "Authorization": "Bearer "+$token
                  },
                  statusCode: {
                    500: function(){
                      $("#cargando").slideUp();
                      $("#login_IN").slideDown();
                      $('#textoMensajeRespuesta').html($mensajeError);
                      $('#mensajeRespuesta').slideDown();
                      $('#mensajeRespuesta').addClass("alert-danger");
                    }
                  },
                  error: function(){
                    $("#cargando").slideUp();
                    $("#login_IN").slideDown();
                    $('#textoMensajeRespuesta').html($mensajeError);
                    $('#mensajeRespuesta').slideDown();
                    $('#mensajeRespuesta').addClass("alert-danger");
                  }
                };

                $.ajax($informacionNucleos).done(function($nucleos){
                  mensajeConsola($nucleos);
                  if($nucleos.data.length > 0){
                    for($i = 0; $i < $nucleos.data.length; $i++){
                      $coterminalesDisciplinaresActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$nucleos.data[$i].nombre+"</p>";
                    }
                  }else{
                    $coterminalesDisciplinaresActuales = "<p>No hay coterminales, puedes ver las recomendaciones.</p>";
                  }
                  $("#coterminalesDisciplinarActualEstudiante").html($coterminalesDisciplinaresActuales);
                });
              }else if($tipoAgrupaciones.data[$i].nombreAgrupacion == "Coterminal Interdisciplinar"){
                //Obtener la informacion de Agrupaciones
                $informacionNucleos = {
                  "url": $APIUrl+"api/nucleos?correo="+$correoEstudiante+"&categoria="+$tipoAgrupaciones.data[$i].nombreAgrupacion,
                  "method": "GET",
                  "timeout": 0,
                  "headers": {
                    "Authorization": "Bearer "+$token
                  },
                  statusCode: {
                    500: function(){
                      $("#cargando").slideUp();
                      $("#login_IN").slideDown();
                      $('#textoMensajeRespuesta').html($mensajeError);
                      $('#mensajeRespuesta').slideDown();
                      $('#mensajeRespuesta').addClass("alert-danger");
                    }
                  },
                  error: function(){
                    $("#cargando").slideUp();
                    $("#login_IN").slideDown();
                    $('#textoMensajeRespuesta').html($mensajeError);
                    $('#mensajeRespuesta').slideDown();
                    $('#mensajeRespuesta').addClass("alert-danger");
                  }
                };

                $.ajax($informacionNucleos).done(function($nucleos){
                  mensajeConsola($nucleos);
                  if($nucleos.data.length > 0){
                    for($i = 0; $i < $nucleos.data.length; $i++){
                      $coterminalesInterdisciplinaresActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$nucleos.data[$i].nombre+"</p>";
                    }
                  }else{
                    $coterminalesInterdisciplinaresActuales = "<p>No hay coterminales, puedes ver las recomendaciones.</p>";
                  }
                  $("#coterminalesInterdisciplinarActualEstudiante").html($coterminalesInterdisciplinaresActuales);
                });
              }else if($tipoAgrupaciones.data[$i].nombreAgrupacion == "MenciÃ³n Disciplinar" && $mostrarMenores == false){
                //Obtener la informacion de Agrupaciones
                $informacionNucleos = {
                  "url": $APIUrl+"api/nucleos?correo="+$correoEstudiante+"&categoria="+$tipoAgrupaciones.data[$i].nombreAgrupacion,
                  "method": "GET",
                  "timeout": 0,
                  "headers": {
                    "Authorization": "Bearer "+$token
                  },
                  statusCode: {
                    500: function(){
                      $("#cargando").slideUp();
                      $("#login_IN").slideDown();
                      $('#textoMensajeRespuesta').html($mensajeError);
                      $('#mensajeRespuesta').slideDown();
                      $('#mensajeRespuesta').addClass("alert-danger");
                    }
                  },
                  error: function(){
                    $("#cargando").slideUp();
                    $("#login_IN").slideDown();
                    $('#textoMensajeRespuesta').html($mensajeError);
                    $('#mensajeRespuesta').slideDown();
                    $('#mensajeRespuesta').addClass("alert-danger");
                  }
                };

                $.ajax($informacionNucleos).done(function($nucleos){
                  mensajeConsola($nucleos);
                  if($nucleos.data.length > 0){
                    for($i = 0; $i < $nucleos.data.length; $i++){
                      $mencionesDisciplinaresActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$nucleos.data[$i].nombre+"</p>";
                    }
                  }else{
                    $mencionesDisciplinaresActuales = "<p>No hay menciones, puedes ver las recomendaciones.</p>";
                  }
                  $("#mencionesDisciplinarActualEstudiante").html($mencionesDisciplinaresActuales);
                });
              }else if($tipoAgrupaciones.data[$i].nombreAgrupacion == "MenciÃ³n Interdisciplinar" && $mostrarMenores == false){
                //Obtener la informacion de Agrupaciones
                $informacionNucleos = {
                  "url": $APIUrl+"api/nucleos?correo="+$correoEstudiante+"&categoria="+$tipoAgrupaciones.data[$i].nombreAgrupacion,
                  "method": "GET",
                  "timeout": 0,
                  "headers": {
                    "Authorization": "Bearer "+$token
                  },
                  statusCode: {
                    500: function(){
                      $("#cargando").slideUp();
                      $("#login_IN").slideDown();
                      $('#textoMensajeRespuesta').html($mensajeError);
                      $('#mensajeRespuesta').slideDown();
                      $('#mensajeRespuesta').addClass("alert-danger");
                    }
                  },
                  error: function(){
                    $("#cargando").slideUp();
                    $("#login_IN").slideDown();
                    $('#textoMensajeRespuesta').html($mensajeError);
                    $('#mensajeRespuesta').slideDown();
                    $('#mensajeRespuesta').addClass("alert-danger");
                  }
                };

                $.ajax($informacionNucleos).done(function($nucleos){
                  mensajeConsola($nucleos);
                  if($nucleos.data.length > 0){
                    for($i = 0; $i < $nucleos.data.length; $i++){
                      $mencionesInterdisciplinaresActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$nucleos.data[$i].nombre+"</p>";
                    }
                  }else{
                    $mencionesInterdisciplinaresActuales = "<p>No hay menciones, puedes ver las recomendaciones.</p>";
                  }
                  $("#mencionesInterdisciplinarActualEstudiante").html($mencionesInterdisciplinaresActuales);
                });
              }else if($tipoAgrupaciones.data[$i].nombreAgrupacion == "Trayectoria"){
                //Obtener la informacion de Agrupaciones
                $informacionNucleos = {
                  "url": $APIUrl+"api/nucleos?correo="+$correoEstudiante+"&categoria="+$tipoAgrupaciones.data[$i].nombreAgrupacion,
                  "method": "GET",
                  "timeout": 0,
                  "headers": {
                    "Authorization": "Bearer "+$token
                  },
                  statusCode: {
                    500: function(){
                      $("#cargando").slideUp();
                      $("#login_IN").slideDown();
                      $('#textoMensajeRespuesta').html($mensajeError);
                      $('#mensajeRespuesta').slideDown();
                      $('#mensajeRespuesta').addClass("alert-danger");
                    }
                  },
                  error: function(){
                    $("#cargando").slideUp();
                    $("#login_IN").slideDown();
                    $('#textoMensajeRespuesta').html($mensajeError);
                    $('#mensajeRespuesta').slideDown();
                    $('#mensajeRespuesta').addClass("alert-danger");
                  }
                };

                $.ajax($informacionNucleos).done(function($nucleos){
                  mensajeConsola($nucleos);
                  if($nucleos.data.length > 0){
                    for($i = 0; $i < $nucleos.data.length; $i++){
                      $trayectoriasActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$nucleos.data[$i].nombre+"</p>";
                    }
                  }else{
                    $trayectoriasActuales = "<p>No hay trayectorias, puedes ver las recomendaciones.</p>";
                  }
                 $("#trayectoriasActualEstudiante").html($trayectoriasActuales);
                });
              }else if($mostrarMenores == true){
                $("#mostrarMenores").html("<h4>MENORES</h4>");
                $("#collapse-A > div").html("<div id='mencionesActuales'><p>Se esta trabajando para mostrar los menores de tu carrera.</p></div>");
                $("#tab-B").remove();
                $("#pane-B").remove();
              }else{
                $coterminalesActuales = "<p>No hay coterminales, puedes ver las recomendaciones.</p>";
                $mencionesActuales = "<p>No hay menciones, puedes ver las recomendaciones.</p>";
                $trayectoriasActuales = "<p>No hay trayectorias, puedes ver las recomendaciones.</p>";
              }
            }
          });*/

          $("#nombreEstudiante").html($nombreEstudiante);
          $("#FacultadEscuela").html($nombreFacultad);
          $("#programaEstudiante").html($programaEstudiante);
          $("#dobleProgramaActualEstudiante").html($dobleProgramasActuales);
        }
      });

      $.ajax($informacionRecomendaciones).done(function($recomendaciones){
        mensajeConsola("La informaciÃ³n de orientador curricular es del estudiante con correo "+$correoEstudiante+" son:");
        mensajeConsola($recomendaciones);

        $calificador = $recomendaciones.data[0].agrup_calif;
        $descripcionCalificador = descripcionCalificador($calificador);
        $imagenCalificador = imagenCalificador($calificador, $rosarioURL);

        $codigoPlan = $recomendaciones.data[0].cod_plan;
        $semestre = $recomendaciones.data[0].semestre;

        $mencionesRecomendacionesResultado = $recomendaciones.data[0].Mencion;
        $coterminalesRecomendacionesResultado = $recomendaciones.data[0].Coterminal;
        $trayectoriasRecomendacionesResultado = $recomendaciones.data[0].Trayectoria;
        $dobleProgramasRecomendacionesResultado = $recomendaciones.data[0]["Doble programa"];

        mensajeConsola("Menciones RECOMENDACIONES del estudiante: ");
        mensajeConsola($mencionesRecomendacionesResultado);
        mensajeConsola("Coterminales RECOMENDACIONES del estudiante: ");
        mensajeConsola($coterminalesRecomendacionesResultado);
        mensajeConsola("Trayectoria RECOMENDACIONES del estudiante: ");
        mensajeConsola($trayectoriasRecomendacionesResultado);
        mensajeConsola("Doble Programa RECOMENDACIONES del estudiante: ");
        mensajeConsola($dobleProgramasRecomendacionesResultado);

        if($mencionesRecomendacionesResultado.length > 0){
          for($i = 0; $i < $mencionesRecomendacionesResultado.length; $i++){
            if($mencionesRecomendacionesResultado[$i].tipo_agrupacion == "MenciÃ³n Interdisciplinar"){
              $mencionesInterdisciplinaresRecomendaciones += "<p class='box_6'><i class='far fa-circle'></i> "+$mencionesRecomendacionesResultado[$i].nombre_agrupacion+"</p>";
            }
            if($mencionesRecomendacionesResultado[$i].tipo_agrupacion == "MenciÃ³n Interdisciplinar" && $mostrarMenores == false && $mencionesRecomendacionesResultado[$i].PCT_agrup > 0){
              $mencionesInterdisciplinaresActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$mencionesRecomendacionesResultado[$i].nombre_agrupacion+"</p>";
            }else{
              $("#textoMencionesCursado").remove();
            }
          }
          for($j = 0; $j < $mencionesRecomendacionesResultado.length; $j++){
            if($mencionesRecomendacionesResultado[$j].tipo_agrupacion == "MenciÃ³n Disciplinar"){
              $mencionesDisciplinaresRecomendaciones += "<p class='box_6'><i class='far fa-circle'></i> "+$mencionesRecomendacionesResultado[$j].nombre_agrupacion+"</p>";
            }
            if($mencionesRecomendacionesResultado[$j].tipo_agrupacion == "MenciÃ³n Disciplinar" && $mostrarMenores == false && $mencionesRecomendacionesResultado[$j].PCT_agrup > 0){
              $mencionesDisciplinaresActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$mencionesRecomendacionesResultado[$j].nombre_agrupacion+"</p>";
            }else{
              $("#textoMencionesCursado").remove();
            }
          }
        }else{
          $mencionesDisciplinaresRecomendaciones = "<p>No hay recomendaciones en menciones disciplinares.</p>";
          $mencionesInterdisciplinaresRecomendaciones = "<p>No hay recomendaciones en menciones interdisciplinares.</p>";
          $mencionesDisciplinaresActuales = "<p>No hay menciones, puedes ver las recomendaciones.</p>";
          $mencionesInterdisciplinaresActuales = "<p>No hay menciones, puedes ver las recomendaciones.</p>";
        }

        if($coterminalesRecomendacionesResultado.length > 0){
          for($i = 0; $i < $coterminalesRecomendacionesResultado.length; $i++){
            if($coterminalesRecomendacionesResultado[$i].tipo_agrupacion == "Coterminal Disciplinar"){
              $coterminalesDisciplinaresRecomendaciones += "<p class='box_6'><i class='far fa-circle'></i> "+$coterminalesRecomendacionesResultado[$i].nombre_agrupacion+"</p>";
            }
          }
          for($i = 0; $i < $coterminalesRecomendacionesResultado.length; $i++){
            if($coterminalesRecomendacionesResultado[$i].tipo_agrupacion == "Coterminal Interdisciplinar"){
              $coterminalesInterdisciplinaresRecomendaciones += "<p class='box_6'><i class='far fa-circle'></i> "+$coterminalesRecomendacionesResultado[$i].nombre_agrupacion+"</p>";
            }
          }
        }else{
          $coterminalesRecomendaciones = "<p>No hay recomendaciones para coterminales.</p>";
        }

        if($trayectoriasRecomendacionesResultado.length > 0){
          for($i = 0; $i < $trayectoriasRecomendacionesResultado.length; $i++){
            $trayectoriasRecomendaciones += "<p class='box_6'><i class='far fa-circle'></i>"+$trayectoriasRecomendacionesResultado[$i].nombre_agrupacion+"</p>";
            if($trayectoriasRecomendacionesResultado[$i].PCT_agrup > 0){
              $trayectoriasActuales += "<p class='box_6'><i class='far fa-circle'></i>"+$trayectoriasRecomendacionesResultado[$i].nombre_agrupacion+"</p>";
            }
          }
        }else{
          $trayectoriasRecomendaciones = "<p>No hay recomendaciones para trayectorias.</p>";
        }

        if($mostrarMenores == true){
          $("#mostrarMenores").html("<h4>MENORES</h4>");
          $("#collapse-A > div").html("<div id='mencionesActuales'><p>Se esta trabajando para mostrar los menores de tu carrera.</p></div>");
          $("#tab-B").remove();
          $("#pane-B").remove();
        }

        if($dobleProgramasRecomendacionesResultado.length > 0 && $mostrarDobleProgramaRecomendaciones == true){
          $doblePrograma = $dobleProgramasRecomendacionesResultado[0].Programas.split(",");
          mensajeConsola($doblePrograma);

          for($i = 0; $i < $doblePrograma.length; $i++){
            $informacionDoblePrograma = {
              "url": $APIUrl+"apiOrientadorCurricular/asignaturasDobleProgramaByStudent?codPlanHomologar="+$doblePrograma[$i]+"&codPlanEstudiante="+$codigoPlan,
              "method": "GET",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer "+$token
              },
              statusCode: {
                500: function(){
                  $("#cargando").slideUp();
                  $("#login_IN").slideDown();
                  $('#textoMensajeRespuesta').html($mensajeError);
                  $('#mensajeRespuesta').slideDown();
                  $('#mensajeRespuesta').addClass("alert-danger");
                }
              },
              error: function(){
                $("#cargando").slideUp();
                $("#login_IN").slideDown();
                $('#textoMensajeRespuesta').html($mensajeError);
                $('#mensajeRespuesta').slideDown();
                $('#mensajeRespuesta').addClass("alert-danger");
              }
            };
            $.ajax($informacionDoblePrograma).done(function($doblePrograma){
              mensajeConsola($doblePrograma);
              if($doblePrograma.data.length > 0){
                $dobleProgramasRecomendaciones += "<div class='texto-porcentaje-dobleprograma col-md-12' data-porcentaje='"+($doblePrograma.data[0].porcentaje * 100).toFixed(0)+"'><p class='box_6' style='width:100%;'><i class='far fa-circle'></i>"+$doblePrograma.data[0].nombrePlanHomologar+" <span class='box_2'><span class='doble-porcentaje' data-toggle='tooltip' data-placement='top' title='"+$textoPorcentajesDoblePrograma+"' style='color:#da0b21;'>"+($doblePrograma.data[0].porcentaje * 100).toFixed(0)+"%</span></span></p></div>";
              }else{
                $dobleProgramasRecomendaciones = "<p>No se encuentran doble programas.</p>";
              }
              $("#dobleProgramaRecomendacionesEstudiante").html($dobleProgramasRecomendaciones);
              $(".texto-porcentaje-dobleprograma").orderBy(function() {return +$(this).attr("data-porcentaje");}).appendTo("#dobleProgramaRecomendacionesEstudiante");
            });
          }
          $("#dobleProgramaRecomendacionesEstudiante").parent().append("<p class='mt-3'>"+$textoPorcentajesDoblePrograma+"</p>");
        }else if($mostrarDobleProgramaRecomendaciones == false){
          $dobleProgramasRecomendaciones = "<p>Ya te encuentras con doble programa, Â¡Bien hecho!</p>";
          $("#dobleProgramaRecomendacionesEstudiante").html($dobleProgramasRecomendaciones);
        }else{
          $dobleProgramasRecomendaciones = "<p>No se encuentran doble programas.</p>";
          $("#dobleProgramaRecomendacionesEstudiante").html($dobleProgramasRecomendaciones);
        }

        //Resultados finales de las consultas
        $("#calificador").html($calificador+"(a)");
        $("#imagenCalificador").attr("src", $imagenCalificador);
        $("#descripcionCalificador").html($descripcionCalificador);
        $("#CerrarSesion").attr("href", $linkCerrarSesion);
        //$("#creditosEstudiante").html(1+"CrÃ©ditos");
        //$("#semestreEstudiante").html($semestre);
        //Actuales
        $("#mencionesDisciplinarActualEstudiante").html($mencionesDisciplinaresActuales);
        $("#mencionesInterdisciplinarActualEstudiante").html($mencionesInterdisciplinaresActuales);
        $("#trayectoriasActualEstudiante").html($trayectoriasActuales);
        //Recomendaciones
        $("#mencionesDisciplinarRecomendacionesEstudiante").html($mencionesDisciplinaresRecomendaciones);
        $("#mencionesInterdisciplinarRecomendacionesEstudiante").html($mencionesInterdisciplinaresRecomendaciones);
        $("#coterminalesDisciplinarRecomendacionesEstudiante").html($coterminalesDisciplinaresRecomendaciones);
        $("#coterminalesInterdisciplinarRecomendacionesEstudiante").html($coterminalesInterdisciplinaresRecomendaciones);
        $("#trayectoriasRecomendacionesEstudiante").html($trayectoriasRecomendaciones);
      });
    });
  });
  
  //Accion de boton con ID #volverInicio para volver a cargar la aplicacion
  $("#volverInicio").click(function(){
    location.reload();
  });
});

//Funcion para saber la descripcion de acuerdo al calificador enviado
function descripcionCalificador($calificador){
  if($calificador == "Iniciador"){
    $descripcionCalificador = "EstÃ¡s empezando tu formaciÃ³n y tienes un mundo de oportunidades por explorar que te permiten diferenciar tu perfil de egreso. Â¡AventÃºrate!";
  }else if($calificador == "Explorador"){
    $descripcionCalificador = "Ya iniciaste tu camino para descubrir nuevos talentos y encausar tu perfil de egreso. Continua la aventura y explora nuevas alternativas.";
  }else if($calificador == "Aventurero"){
    $descripcionCalificador = "Â¡Felicitaciones!, has aprovechado las diversas oportunidades de formaciÃ³n que la universidad ofrece. Con seguridad podrÃ¡s enfocar lo aprendido y encontrar nuevas motivaciones que enriquezcan tu perfil y encausen tu proyecciÃ³n profesional.";
  }else{
    $descripcionCalificador = "Verifica la informaciÃ³n.";
  }
  return $descripcionCalificador;
}

//Funcion para saber la imagen de acuerdo al calificador enviado
function imagenCalificador($calificador, $rosarioURL){
  if($calificador == "Iniciador"){
    $imagenCalificador = $rosarioURL+"/PortalUrosario/media/UR-V4/Opciones_Academicas/Login_estudiantes/img/avatar_iniciador.png";
  }else if($calificador == "Explorador"){
    $imagenCalificador = $rosarioURL+"/PortalUrosario/media/UR-V4/Opciones_Academicas/Login_estudiantes/img/avatar_Explorador.png";
  }else if($calificador == "Aventurero"){
    $imagenCalificador = $rosarioURL+"/PortalUrosario/media/UR-V4/Opciones_Academicas/Login_estudiantes/img/avatar_aventurero.png";
  }else{
    $imagenCalificador = $rosarioURL+"/PortalUrosario/media/UR-V4/Opciones_Academicas/Login_estudiantes/img/avatar_iniciador.png";
  }
  return $imagenCalificador;
}

function reiniciarContenedores(){
  $("#nombreEstudiante").html("");
  $("#FacultadEscuela").html("");
  $("#programaEstudiante").html("");
  $("#calificador").html("");
  $("#descripcionCalificador").html("");
  //Actuales
  $("#mencionesDisciplinarActualEstudiante").html("");
  $("#mencionesInterdisciplinarActualEstudiante").html("");
  //$("#coterminalesDisciplinarActualEstudiante").html("");
  //$("#coterminalesInterdisciplinarActualEstudiante").html("");
  $("#trayectoriasActualEstudiante").html("");
  $("#dobleProgramaActualEstudiante").html("");
  //Recomendaciones
  $("#mencionesDisciplinarRecomendacionesEstudiante").html("");
  $("#mencionesInterdisciplinarRecomendacionesEstudiante").html("");
  $("#coterminalesDisciplinarRecomendacionesEstudiante").html("");
  $("#coterminalesInterdisciplinarRecomendacionesEstudiante").html("");
  $("#trayectoriasRecomendacionesEstudiante").html("");  
}

//Funcion para saber si se inicia la aplicacion correctamente con JavaScript y JQuery
function Inicializador(){
  console.clear();
  mensajeConsola("Inicio de aplicaciÃ³n Experiencia Estudiantil...");
}

//Mensaje de Consola
function mensajeConsola($mensaje){
  console.log($mensaje);
}

jQuery.fn.orderBy = function(keySelector){
    return this.sort(function(a,b){
        a = keySelector.apply(a);
        b = keySelector.apply(b);
        if (a < b)
            return 1;
        if (a > b)
            return -1;
        return 0;
    });
};