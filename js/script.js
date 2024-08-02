const $btnSignIn = document.querySelector(".sign-in-btn"),
  $btnSignUp = document.querySelector(".sign-up-btn"),
  $signUp = document.querySelector(".sign-up"),
  $signIn = document.querySelector(".sign-in");

document.addEventListener("click", (e) => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle("active");
    $signUp.classList.toggle("active");
  }
});
const $signInForm = document.getElementById("signInForm");

$signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Realizar la autenticación aquí (simulado con una alerta)
  alert("Autenticación exitosa. Redirigiendo a la página principal...");
  // Después de la autenticación, redirigir a la página principal
  window.location.href = "/index.html";
});
