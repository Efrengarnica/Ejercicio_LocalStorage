const alertMensaje = document.getElementById("alertMensaje");
const btnEliminar = document.getElementById("btnEliminar");



window.addEventListener("load", function(event){

    if(this.localStorage.getItem("nombre")!=null){
        alertMensaje.innerHTML=`Hola, <strong>${this.localStorage.getItem("nombre")} </strong>, bienvenido/a de nuevo`;
    }//if nombre!=null

    alertMensaje.style.display="block"; //Para que se muestre, si esto solo agregas al div pero no lo muestra

});//load

btnEliminar.addEventListener("click", function(event){

    event.preventDefault();
    localStorage.removeItem("nombre");
    //Tengo que agregar una funcionalidad para que una vez que elimine le aparezca un mensaje de que regrese a la 
    //Pagina principal ya que cuando elimino se queda el mensaje 
    //location.href="welcome.html";
    history.go(0); //Cambia a la misma página, si tuviera otro numero cambia de página a la anterior o a la siguiente, depende el número
});