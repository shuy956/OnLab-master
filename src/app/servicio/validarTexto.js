function validar(){
serviciovacio = document.getElementById("serviciovacio").value;
fechavacio = document.getElementById("fechavacio").value;
sexoservicio = document.getElementById("sexoservicio").value;
nombreservicio = document.getElementById("nombreservicio").value;
apellidopaservicio = document.getElementById("apellidopaservicio").value;
apellidomaservicio = document.getElementById("apellidomaservicio").value;
fechanacimientoservicio = document.getElementById("fechanacimientoservicio").value;
postalservicio = document.getElementById("postalservicio").value;
coloniaservicio = document.getElementById("coloniaservicio").value;
numerocalleservicio = document.getElementById("calleservicio").value;
numerotelefonoservicio = document.getElementById("numerotelefonoservicio").value;
correoservicio = document.getElementById("correoservicio").value;


    if (serviciovacio.length==0 || /ʌ\s+$/.test(serviciovacio)){
        Swal.fire(
            '¡Cita exitosa!','Favor de llegar 5 minutos antes','success'
          )
    }
    
    if (fechavacio.length==0 || /ʌ\s+$/.test(fechavacio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    
    if (sexoservicio.length==0 || /ʌ\s+$/.test(sexoservicio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    
    if (nombreservicio.length==0 || /ʌ\s+$/.test(nombreservicio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    
    if (apellidopaservicio.length==0 || /ʌ\s+$/.test(apellidopaservicio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    
    if (apellidomaservicio.length==0 || /ʌ\s+$/.test(apellidomaservicio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    
    if (fechanacimientoservicio.length==0 || /ʌ\s+$/.test(fechanacimientoservicio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    
    if (postalservicio.length==0 || /ʌ\s+$/.test(postalservicio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    
    if (coloniaservicio.length==0 || /ʌ\s+$/.test(coloniaservicio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    
    if (calleservicio.length==0 || /ʌ\s+$/.test(calleservicio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    
    if (numerocalleservicio.length==0 || /ʌ\s+$/.test(numerocalleservicio)){
    alert("El campo de nombre de servicio esta vacio");
    }
    

    if (numerotelefonoservicio.length==0 || /ʌ\s+$/.test(numerotelefonoservicio)){
        alert("El campo de nombre de servicio esta vacio");
        }
    if (correoservicio.length==0 || /ʌ\s+$/.test(correoservicio)){
        alert("El campo de nombre de servicio esta vacio");
        }
    




}