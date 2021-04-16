class CardComponent extends HTMLElement {
  connectedCallback() {
    cardMock.forEach((card) => {
      this.innerHTML += `
        <div class="card">
        <img loading="lazy" src="${card.imageUrl}" alt="Flag of ${card.name}" />
        <div class="card-content">
          <h4>${card.name}</h4>
        </div>
        `;
    });
  }
}

customElements.define("card-component", CardComponent);
