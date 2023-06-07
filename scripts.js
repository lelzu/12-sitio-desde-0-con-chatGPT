function validateForm() {
    // Obtén los valores de los campos del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Realiza la validación
    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos del formulario.");
    } else {
        // Enviar el formulario o realizar otras acciones
        alert("¡Mensaje enviado con éxito!");
        document.getElementById("contactForm").reset(); // Reinicia el formulario después de enviarlo
    }
}
