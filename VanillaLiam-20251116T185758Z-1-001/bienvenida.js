const bienvenida = document.getElementById("bienvenida");
const UserData = JSON.parse(localStorage.getItem("userData"));
if (UserData) {
  const email = UserData.email;
  const fecha = new Date(UserData.ultimaVezConectado);

  const dia = fecha.getDate();
  const mes = fecha.getMonth()+1;
  const año = fecha.getFullYear();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();

  bienvenida.innerHTML = `
    <h3>Hola ${email}</h3>
    <p>La última vez que entraste fue el ${dia}/${mes}/${año} a las ${hora}:${minutos}:${segundos}</p>
  `;
} else {
  bienvenida.innerHTML = "<p>No hay datos del usuario.</p>";
}
const preguntas= document.getElementById("preguntas");
preguntas.addEventListener("click", function(){
    window.location.href="preguntas.html";
});