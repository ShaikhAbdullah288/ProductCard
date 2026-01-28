

function selectCard(radio) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.classList.remove("active");
  });
  radio.closest(".card").classList.add("active");
}
