class CardComponent extends HTMLElement {
  connectedCallback() {
    cardMock.forEach((card) => {
      this.innerHTML += `
      <div class="card">
      <img class="card-img-top" src="${card.imageUrl}" alt="Flag of ${card.title}" loading="lazy">
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text"></p>
      </div>
      </div>
        `;
    });
  }
}

customElements.define("card-component", CardComponent);
