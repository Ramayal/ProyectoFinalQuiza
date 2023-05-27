const fs = require('fs');


function logError(error) {
  const MensajeError = `Error: ${error.message}. Code: ${error.code}`;
  console.error(MensajeError); // consologeamos para obtener el error en el terminal 

  new Date().toISOString()
  new Date().toISOString().split('T')[0];
  // Obtenemos la fecha y hora actual del sistema
  const ahora = new Date();
  const Tiempo = ahora.toISOString();
  const nuevaFecha = new Date().toDateString().split('T');  
  // Escribir el mensaje de error y la fecha y hora en un archivo de texto
  const Mensaje = `${Tiempo}: ${MensajeError}\n`;
  fs.appendFile('log_Excepciones_' + nuevaFecha,  Mensaje, function (err) {
    if (err) throw err;
    console.log('Registro del error escrito en archivo txt');
  });
}

try {
  // Código que puede generar una excepción en este caso aaa ya que no esta decladara 
//

} catch (error) {
  logError(error); //atrapamos el error en la variable error 
}




