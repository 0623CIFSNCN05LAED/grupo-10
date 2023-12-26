document.addEventListener("DOMContentLoaded", function () {
  const productsInCart = document.querySelectorAll(".producto");
  const totalCart = document.getElementById("total");

  productsInCart.forEach((product) => {
    const productQuantity = product.querySelector(".cantidad");
    productQuantity.addEventListener("input", updateQuantity);
  });
  updateQuantity();

  function updateQuantity() {
    const items = document.querySelectorAll(".producto");
    let total = 0;

    items.forEach((product) => {
      const productPrice = parseFloat(
        product.querySelector("p").textContent.replace("Precio: $", "")
      );
      const cantidad = parseInt(product.querySelector(".cantidad").value);
      total += cantidad * productPrice;
    });
    totalCart.textContent = total.toFixed(2);
  }
});
