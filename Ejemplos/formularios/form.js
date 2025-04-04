document.getElementById("miFormulario").addEventListener("submit", function(event) {
    let valid = true;
  
    // nombre
    const nombre = document.getElementById("nombre");
    const errorNombre = document.getElementById("errorNombre");
    if (nombre.value.trim().length < 3) {
      errorNombre.innerText = "El nombre es obligatorio y debe tener al menos 3 caracteres.";
      valid = false;
    } else {
      errorNombre.innerText = "";
    }
  
    // email
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      errorEmail.innerText = "Introduce un correo electrónico válido.";
      valid = false;
    } else {
      errorEmail.innerText = "";
    }
  
    // contraseña
    const passw = document.getElementById("passw");
    const errorPassw = document.getElementById("errorPassw");
    if (passw.value.length < 6) {
      errorPassw.innerText = "La contraseña debe tener al menos 6 caracteres.";
      valid = false;
    } else {
      errorPassw.innerText = "";
    }
  
    //edad
    const edad = document.getElementById("edad");
    const errorEdad = document.getElementById("errorEdad");
    const edadValor = parseInt(edad.value, 10);
    if (isNaN(edadValor) || edadValor < 18 || edadValor > 99) {
      errorEdad.innerText = "La edad debe ser un número entre 18 y 99.";
      valid = false;
    } else {
      errorEdad.innerText = "";
    }
  
    // telefono
    const telefono = document.getElementById("telefono");
    const errorTelefono = document.getElementById("errorTelefono");
    const telefonoRegex = /^\d{9}$/;
    if (!telefonoRegex.test(telefono.value.trim())) {
      errorTelefono.innerText = "El teléfono debe contener exactamente 9 números.";
      valid = false;
    } else {
      errorTelefono.innerText = "";
    }
  
    // Si alguna validación falla, se previene el envío del formulario
    if (!valid) {
      event.preventDefault();
    }
  });
  