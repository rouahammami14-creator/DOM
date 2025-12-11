function updateTotal() {
  let total = 0;
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let price = Number(card.querySelector(".unit-price").textContent.replace("$", ""));
    let qty = Number(card.querySelector(".quantity").textContent);
    total += price * qty;
  });

  document.querySelector(".total").textContent = total + " $";
}

document.querySelectorAll(".fa-plus-circle").forEach(btn => {
  btn.addEventListener("click", function () {
    let q = this.parentElement.querySelector(".quantity");
    q.textContent = Number(q.textContent) + 1;
    updateTotal();
  });
});

document.querySelectorAll(".fa-minus-circle").forEach(btn => {
  btn.addEventListener("click", function () {
    let q = this.parentElement.querySelector(".quantity");
    if (Number(q.textContent) > 0) {
      q.textContent = Number(q.textContent) - 1;
      updateTotal();
    }
  });
});

document.querySelectorAll(".fa-trash-alt").forEach(btn => {
  btn.addEventListener("click", function () {
    let card = this.closest(".card");  // ✅ remove entire card
    card.remove();
    updateTotal();
  });
});

document.querySelectorAll(".fa-heart").forEach(btn => {
  btn.addEventListener("click", function () {
    this.style.color = this.style.color === "red" ? "black" : "red";
  });
});

updateTotal();