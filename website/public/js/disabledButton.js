window.onload = function () {
  const checkbox = document.getElementById("privacy_policy");
  const crearCuentaButton = document.getElementById("crear-cuenta-btn");

  crearCuentaButton.disabled = !checkbox.checked;
  toggleButtonStyle();

  checkbox.addEventListener("change", function () {
    crearCuentaButton.disabled = !checkbox.checked;
    toggleButtonStyle();
  });
  function toggleButtonStyle() {
    if (crearCuentaButton.disabled) {
      crearCuentaButton.classList.add("reg-button-disabled");
    } else {
      crearCuentaButton.classList.remove("reg-button-disabled");
    }
  }
};
