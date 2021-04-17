class SidenavComponent extends HTMLElement {
  connectedCallback() {
    let sidenav = `
    <nav class="sidenav">
      <img class="logo" src="${sidenavMock.logoUrl}" alt="${sidenavMock.logoAlt}" />
      <h2>${sidenavMock.title}</h2>
    `;

    sidenavMock.menuLinks.forEach((item) => {
      sidenav += `
      <a href="${item.url}">
        <img class="icons" src="${item.iconUrl}" alt="${item.name}" />
        ${item.name}
      </a>`;
    });

    this.innerHTML = `${sidenav} </nav>`;
  }
}

customElements.define("sidenav-component", SidenavComponent);
