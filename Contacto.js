function validar(){
    var form = document.form;
    if(form.nombre.value ==0){
        alert("El Campo NOMBRE esta vacío");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }
    if(form.mail.value ==0){
        alert("El Campo EMAIL esta vacío");
        form.mail.value="";
        form.mail.focus();
        return false;
    }
    if(form.telefono.value ==0){
        alert("El Campo TELEFONO esta vacío");
        form.telefono.value="";
        form.telefono.focus();
        return false;
    }
    if(form.mensaje.value ==0){
        alert("El Campo MENSAJE esta vacío");
        form.mensaje.value="";
        form.mensaje.focus();
        return false;
    }
    alert("Datos enviados");
    form.submit();

}
