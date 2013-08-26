function ValidNum(e) {
    var tecla= document.all ? tecla = e.keyCode : tecla = e.which;
    return ((tecla > 0 && tecla < 100));
}

function buscarcliente()
{
    var vtxtnot = $('#txtnot').val();
    document.getElementById("resultado").innerHTML="<br><br><center><img src='img/preload.gif'> procesando...</center>";
    $.post("encuesta_servicio.jsp",{
        vtxtnot:vtxtnot
    },function(data){
        $("#resultado").html(data);
    });
}

function buscarcliente2()
{
    var vtxtcodigo = $('#txtcodigo').val();
    document.getElementById("resultado").innerHTML="<br><br><center><img src='img/preload.gif'> procesando...</center>";
    $.post("encuesta2.jsp",{
        vtxtcodigo:vtxtcodigo
    },function(data){
        $("#resultado").html(data);
    });
}


function insertarencuesta_servicio(){

    var txtlocal = $('#txtlocal').val();
    var txtnot = $('#txtnot').val();
    var txtpregunta1 = $('#txtpregunta1').val();
    var txtpregunta2 = $('#txtpregunta2').val();
    var txtpregunta3 = $('#txtpregunta3').val();
    var txtpregunta4 = $('#txtpregunta4').val();
    var txtpregunta5 = $('#txtpregunta5').val();
    var txtpregunta6 = $('#txtpregunta6').val();
    var txtcomentario = $('#txtcomentario').val();
    
    if( $('#txtpregunta1-8').hasClass('active') || $('#txtpregunta1-9').hasClass('active') || $('#txtpregunta1-10').hasClass('active') ){
    if( $('#txtpregunta2-1').hasClass('active') || $('#txtpregunta2-0').hasClass('active') ){
        
    document.getElementById("buscarencuesta").innerHTML="<img src='img/preload.gif'> procesando...";
    $.post("registrarencuestaservicio",{
            txtlocal:txtlocal,
            txtnot:txtnot,
            txtpregunta1:txtpregunta1,
            txtpregunta2:txtpregunta2,
            txtpregunta3:txtpregunta3,
            txtpregunta4:txtpregunta4,
            txtpregunta5:txtpregunta5,
            txtpregunta6:txtpregunta6,
            txtcomentario:txtcomentario
	},function(data){
		$("#buscarencuesta").html(data);
	});   
              
	}else{
		alert("Seleccione una Opcion de la Pregunta 2");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 1");
	}
        
}



function insertarencuesta_ventas(){

    var txtdocumento = $('#txtdocumento').val();
    var txtpregunta1 = $('#txtpregunta1').val();
    var txtpregunta2 = $('#txtpregunta2').val();
    var txtpregunta2a = $('#txtpregunta2a').val();
    var txtpregunta2b = $('#txtpregunta2b').val();
    var txtpregunta2c = $('#txtpregunta2c').val();
    var txtpregunta2d = $('#txtpregunta2d').val();
    var txtpregunta2e = $('#txtpregunta2e').val();
    var txtpregunta2f = $('#txtpregunta2f').val();
    var txtpregunta2g = $('#txtpregunta2g').val();
    var txtpregunta3 = $('#txtpregunta3').val();
    var txtpregunta4 = $('#txtpregunta4').val();
    var txtpregunta5 = $('#txtpregunta5').val();

    if( $("input[name='txtpregunta1']:radio").is(':checked')) {
    if( $("input[name='txtpregunta2']:radio").is(':checked')) {
    if( $("input[name='txtpregunta2a']:radio").is(':checked')) {
    if( $("input[name='txtpregunta2b']:radio").is(':checked')) {
    if( $("input[name='txtpregunta2c']:radio").is(':checked')) {
    if( $("input[name='txtpregunta2d']:radio").is(':checked')) {
    if( $("input[name='txtpregunta2e']:radio").is(':checked')) {
    if( $("input[name='txtpregunta2f']:radio").is(':checked')) {
    if( $("input[name='txtpregunta2g']:radio").is(':checked')) {
    if (txtpregunta3.length>0){
    if( $("input[name='txtpregunta4']:radio").is(':checked')) {

    document.getElementById("buscarencuesta2").innerHTML="<img src='img/preload.gif'> procesando...";
    $.post("registrarencuestaventas",{
            txtdocumento:txtdocumento,
            txtpregunta1:txtpregunta1,
            txtpregunta2:txtpregunta2,
            txtpregunta2a:txtpregunta2a,
            txtpregunta2b:txtpregunta2b,
            txtpregunta2c:txtpregunta2c,
            txtpregunta2d:txtpregunta2d,
            txtpregunta2e:txtpregunta2e,
            txtpregunta2f:txtpregunta2f,
            txtpregunta2g:txtpregunta2g,
            txtpregunta3:txtpregunta3,
            txtpregunta4:txtpregunta4,
            txtpregunta5:txtpregunta5
	},function(data){
		$("#buscarencuesta2").html(data);
	});
                     
	}else{
		alert("Seleccione una Opcion de la Pregunta 4");
	}
        
	}else{
		alert("Ingrese su Respuesta en la Pregunta 3");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 2G");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 2F");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 2E");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 2D");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 2C");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 2B");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 2A");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 2");
	}
        
	}else{
		alert("Seleccione una Opcion de la Pregunta 1");
	}

}
