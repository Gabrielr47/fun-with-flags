function openCardModal() {
  console.log("opened");
}

class CardComponent extends HTMLElement {
  connectedCallback() {
    cardMock.forEach((card) => {
      this.innerHTML += `
      <div class="card" onclick="openCardModal()">
      <img class="card-img-top" src="images/flags/${card.code}.svg" alt="Flag of ${card.name}" loading="lazy">
      <div class="card-body">
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text"></p>
      </div>
      </div>
        `;
    });
  }
}

customElements.define("card-component", CardComponent);
