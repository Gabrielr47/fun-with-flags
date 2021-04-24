class MenuComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="hamburger-menu">
        <button class="open-btn" type="button" onclick="openNav()">&#9776;</button>
      </div>
      `;
  }
}
customElements.define("menu-component", MenuComponent);
