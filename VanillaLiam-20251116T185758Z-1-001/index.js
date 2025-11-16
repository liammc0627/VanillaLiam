const container = document.getElementById("container");
function mostrarContainer() {
  container.innerHTML = `<input type="text"  id="usuario" placeholder="Usuario">
        <button id="enviar">Enviar</button>`;
  const boton = document.getElementById("enviar");
  
  boton.addEventListener("click",function(){
    const valor = document.getElementById("usuario").value;

    if(validarUsuario(valor)){
      const userData = {
        email: valor,
        ultimaVezConectado: Date.now()
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href="bienvenida.html";
      
    }else{
      alert("Has puesto el correo mal");
    }
  })
}
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "m") {
    mostrarContainer();
  }
});
setTimeout(mostrarContainer, 5000);

function validarUsuario(valor) {
  const posArroba = valor.indexOf("@");
  if (posArroba <= 0 || posArroba === valor.length - 1) {
    return false;
  }
  const posPunto = valor.indexOf(".", posArroba + 1);

  if (posPunto === -1 || posPunto === posArroba + 1){
    return false;
  } 

  if (posPunto === valor.length - 1){
    return false;
  } 

  return true;
}

const bienvenida = document.getElementById("bienvenida");
function mostrarBienvenida() {
  bienvenida.innerHTML = '<h3>Has entrado bien</h3>';
}
console.log("terminado");
