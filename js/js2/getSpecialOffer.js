let quantity = (document.querySelector(".getSpecialQuantity").placeholder =
  "1");
function minus() {
  if (quantity > 1) {
    quantity--;
    document.querySelector(".getSpecialQuantity").placeholder = quantity;
  }
}
function plus() {
  quantity++;
  document.querySelector(".getSpecialQuantity").placeholder = quantity;
}
