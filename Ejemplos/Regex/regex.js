let cp = /^08\d{3}$/
let nif = /^\d{8}-[A-Za-z]$/
let numeroTelefono = /^[6789]\d{2}(?: \d{2} \d{2} \d{2}|\s\d{3}\s\d{3})$/
let iban = /^(?=.{15,34}$)[A-Z]{2}\d{2}[A-Z0-9]+$/

function elegirRegex(id) {
    switch (id) {
      case 'cp':
        alert('Se aplicara la restriccion para el codigo postal')
        return cp;
      case 'nif':
        alert('Se aplicara la restriccion para el NIF')
        return nif;
      case 'numeroTelefono':
        alert('Se aplicara la restriccion para el numero de telefono')
        return numeroTelefono;
      case 'iban':
        alert('Se aplicara la restriccion para el IBAN')
        return iban;
    }
  }  