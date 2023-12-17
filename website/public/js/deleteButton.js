window.onload = function () {
  const deleteForm = document.getElementById("deleteForm");
  const deleteButton = document.querySelector(".delete-product");

  deleteButton.addEventListener("click", function (event) {
    event.preventDefault();

    var confirmAction = confirm(
      "¿Estás seguro de eliminar este registro?. Esta acción no podrá revertirse."
    );

    if (confirmAction) {
      deleteForm.submit();
    } else {
      console.log("El usuario canceló la eliminación del registro");
    }
  });
};
