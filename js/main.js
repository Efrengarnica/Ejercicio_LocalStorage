const txtNombre = document.getElementById("txtNombre");
const btnGuardar = document.getElementById("btnGuardar");
const alertValidaciones = document.getElementById("alertValidaciones");


btnGuardar.addEventListener("click", function(event){
    event.preventDefault();

    alertValidaciones.innerHTML="";
    alertValidaciones.style.display="none"; //Creo que quita el recuadro rojo si te llegas a equivocar y metes de nuevo datos correctos, para que
    //No se quede ahi el recuadro anterior con el texto anterior.

    if(txtNombre.value.length<3){
        alertValidaciones.innerHTML="El nombre no es correcto";
        alertValidaciones.style.display="block";
        return false;
    }//if

    localStorage.setItem("nombre", txtNombre.value);



});//btnGuardar