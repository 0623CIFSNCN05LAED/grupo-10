const allExtensions = ["JPG", "JPEG", "PNG", "GIF"];

const validations = [
  {
    field: "name",
    check: (input) => input.value.length >= 5,
    message: "El nombre de producto debe tener al menos cinco caracteres",
  },
  {
    field: "price",
    check: (input) => input.value > 0,
    message: "El precio del producto debe ser mayor a 0",
  },
  {
    field: "description",
    check: (input) => input.value.length >= 20,
    message: "La descripción debe tener al menos 20 caracteres",
  },
  {
    field: "image",
    check: (input) => input.value === "" || validateFileExtension(input),
    message:
      "Solo se permiten archivos con extensiones: " + allExtensions.join(", "),
  },
];

validations.forEach((validation) => {
  const inputId = validation.field;
  const input = document.getElementById(inputId);
  const inputErrorMsg = document.getElementById(inputId + "Error");

  function validate() {
    inputValidation(validation, input, inputErrorMsg);
  }

  input.addEventListener("blur", validate);
  input.addEventListener("input", validate);
});

//Validación de la extensión de la imagen
function validateFileExtension(input) {
  const fileName = input.value.toUpperCase();
  //Extraer el nombre de la extencion | separa el enunciado cada que contenga un punto y luego extrae solo la extencion
  const fileExtension = fileName.split(".").pop();
  //Verificar si la extencion esta incluida en el array de extenciones
  return allExtensions.includes(fileExtension);
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const validationsResult = [];

  validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
    const result = inputValidation(validation, input, inputErrorMsg);
    validationsResult.push(result);
  });

  if (validationsResult.every((val) => val == true)) {
    form.submit();
  }
});

function inputValidation(validation, input, inputErrorMsg) {
  if (!input.value && validation.field !== "image") {
    if (inputErrorMsg) {
      inputErrorMsg.innerText = "El campo no debe estar vacío";
      inputErrorMsg.classList.add("display");
    }
    return false;
  }
  if (!validation.check(input)) {
    if (inputErrorMsg) {
      inputErrorMsg.innerText = validation.message;
      inputErrorMsg.classList.add("display");
    }
    return false;
  }

  if (inputErrorMsg) {
    inputErrorMsg.innerText = "";
    inputErrorMsg.classList.remove("display");
  }

  return true;
}
