<script>
    const fecha = new Date();
    var x = fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate();
    var url_base = "https://crai-salas.urosario.edu.co/agenda/index.php?view=day";
    var url_campaign = "&utm_source=PWC&utm_medium=Web&utm_campaign=Llegada_desde_PWC_Asesoria_agendar_home&utm_id=Origen_MRBS";
    var page_x = "&page_date=" + x;
    var url_mc = url_base + page_x + "&area=20" + url_campaign;
    var url_ui = url_base + page_x + "&area=21" + url_campaign;
    var url_gdi = url_base + page_x + "&area=16" + url_campaign;
    document.getElementById("mc").setAttribute("href", url_mc);
    document.getElementById("ui").setAttribute("href", url_ui);
    document.getElementById("gdi").setAttribute("href", url_gdi);
    document.getElementById("mct").setAttribute("href", url_mc);
    document.getElementById("uit").setAttribute("href", url_ui);
    document.getElementById("gdit").setAttribute("href", url_gdi);
</script>