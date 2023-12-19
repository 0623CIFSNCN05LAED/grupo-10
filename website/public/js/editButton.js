window.onload = function () {
  const deleteForm = document.getElementById("editForm");
  const deleteButton = document.querySelector(".reg-button");

  deleteButton.addEventListener("click", function (event) {
    event.preventDefault();

    var confirmAction = confirm("¿Estás seguro de guardar estos cambios?");

    if (confirmAction) {
      deleteForm.submit();
    } else {
      console.log("El usuario canceló la edición");
    }
  });
};
