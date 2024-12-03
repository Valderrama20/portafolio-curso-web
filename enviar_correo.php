<?php
// Verificar si el formulario fue enviado al servidor mediante un metodo POST

if($_SERVER["REQUEST_METHOD"] === "POST"){
  
    // Recuperar los datos enviados desde el formulario y validarlos para evitar problemas de seguridad
     $name = htmlspecialchars($_POST["name"]) // elimina caracteres especiales

     $email = htmlspecialchars($_POST["email"]) // elimina caracteres especiales

     $message = htmlspecialchars($_POST["message"]) // elimina caracteres especiales

    //  Direccion electronica donde se envia

    $destinatario = "jose23122009@gmail.com"

    $asunto = "Nuevo mensaje del contacto"

    $contenido = "Has recibido un correo"

    $contenido = "Nombre: $name"

    $contenido = "Email: $email"

    $contenido = "Mensaje: $message"

    // Encabezado

    $headers = "De: $email"

    $headers = "Reply: $email"

    // funcion if
   
    if(mail($destinatario, $asunto, $contenido, $headers)){
        echo "Enviado con exito"
    }
    else {
        echo "error de envio"
    }
    else {
        echo "acceso no autorizado"

    }



}
?>
