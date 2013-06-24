/** * @author JUAN PABLO GARZON DUEÑAS * @Fecha 2013-Mayo */
$(window).load(function () {
		var nombre = sessionStorage.getItem("nombre");		var idinscripcion = sessionStorage.getItem("id");  		if (nombre != null && nombre != "" && idinscripcion != "" && idinscripcion != "")
		{//window.location = "constructor_tramo.html";		}
});
$(document).ready(function(){
	$("#submit").click(function() {		var usr = $("#login").val();		var pas = $("#password").val();		if (usr== ""){			alert("Digite usuario por favor")			$("#login").focus();			return;		}
		if (pas== ""){			alert("Digite clave por favor")			$("#password").focus();			return;		}
		$.ajax({			url:'http://localhost:8080/was/grodco/servicios/logueo.php?usr='+usr+'&pas='+pas,			dataType: 'json',			success: function(data){				if (data[0].encontrado == "true"){				 	var id = data[1].id;				 	var nombre = data[1].nombre;					//alert( "nombre = " + sessionStorage.getItem("nombre"));				 	sessionStorage.setItem("id", id);	//setCookie("idinscripcion",idinscripcion,1);				 	sessionStorage.setItem("nombre", nombre);		//setCookie("nombre",nombre,1); 					$("#equivocado").text('Ingreso exitoso,espere por favor...');					db.transaction(AlmacenaUsr, errorCB);	//alert("srv Ppal");					window.location = "constructor_tramo.html";					}else{					$("#equivocado").text('Usuario o contraseña no valido!');				} 			},			error: function (error) {                  db.transaction(BuscaUsuario, errorCB);                              }		})	})})