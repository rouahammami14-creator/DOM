//function that recalculates the total price
function updateTotal() {
  let total = 0;
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    //get price and quantity from each card
    let price = Number(card.querySelector(".unit-price").textContent.replace("$", ""));
    let qty = Number(card.querySelector(".quantity").textContent);
    total += price * qty;
  });

  //display the new total 
  document.querySelector(".total").textContent = total + " $";
}

// increase quantity
document.querySelectorAll(".fa-plus-circle").forEach(btn => {
  btn.addEventListener("click", function () {
    let q = this.parentElement.querySelector(".quantity");
    q.textContent = Number(q.textContent) + 1;
    updateTotal();
  });
});

//decrease quantity
document.querySelectorAll(".fa-minus-circle").forEach(btn => {
  btn.addEventListener("click", function () {
    let q = this.parentElement.querySelector(".quantity");
    if (Number(q.textContent) > 0) {
      q.textContent = Number(q.textContent) - 1;
      updateTotal();
    }
  });
});
//delete item
document.querySelectorAll(".fa-trash-alt").forEach(btn => {
  btn.addEventListener("click", function () {
    let card = this.closest(".card");  // ✅ remove entire card
    card.remove();
    updateTotal();
  });
});

//like button toggle
document.querySelectorAll(".fa-heart").forEach(btn => {
  btn.addEventListener("click", function () {
    this.style.color = this.style.color === "red" ? "black" : "red";
  });
});

//run total once on page load
updateTotal();