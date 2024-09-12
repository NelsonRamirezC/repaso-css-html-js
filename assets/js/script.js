const formulario = document.getElementById("formulario-contacto")

formulario.addEventListener("submit", (event) => {
    console.log(event)
    event.preventDefault()
    
    const data = new FormData(formulario)

    let nombre = data.get("nombre")
    let email = data.get("email")
    // let asunto = data.get("asunto")
    // let mensaje = data.get("mensaje")


    Swal.fire({
        position: "center",
        icon: "success",
        title: `Gracias ${nombre}, por preferirnos. Nos pondremos en contacto contigo a tu correo: ${email}`,
        showConfirmButton: false,
        timer: 2500
      });

    formulario.reset()
})