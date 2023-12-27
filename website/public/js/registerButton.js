window.onload = function () {
  const checkbox = document.getElementById("privacy_policy");
  const crearCuentaButton = document.getElementById("crear-cuenta-btn");

  crearCuentaButton.disabled = !checkbox.checked;

  checkbox.addEventListener("change", function () {
    crearCuentaButton.disabled = !checkbox.checked;
  });
};
