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

// date input js code
$(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd-mm-yy",
    duration: "fast",
  });
});

// radio input change menu
function menuChange() {
  if (document.querySelector("#r3").checked) {
    document.querySelector(".specialOfferAir").classList.remove("content");
    document.querySelector(".specialOffer").classList.add("content");
  } else {
    document.querySelector(".specialOfferAir").classList.add("content");
    document.querySelector(".specialOffer").classList.remove("content");
  }
}
