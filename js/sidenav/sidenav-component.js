function closeNav() {
  const sidenavClosedWidth = "0";
  document.querySelectorAll(".sidenav")[0].style.width = sidenavClosedWidth;
  document.documentElement.style.setProperty(
    "--sidenav-width",
    sidenavClosedWidth
  );

  document.querySelectorAll(".open-btn")[0].style.display = "block";
  document.querySelectorAll(".close-btn")[0].style.display = "none";
}

function openNav() {
  const sidenavClosedWidth = "300px";
  document.querySelectorAll(".sidenav")[0].style.width = sidenavClosedWidth;
  document.documentElement.style.setProperty(
    "--sidenav-width",
    sidenavClosedWidth
  );

  document.querySelectorAll(".open-btn")[0].style.display = "none";
  document.querySelectorAll(".close-btn")[0].style.display = "block";
}

class SidenavComponent extends HTMLElement {
  connectedCallback() {
    let sidenav = `
    <nav class="sidenav">
      <button class="close-btn" type="button" onclick="closeNav()">&times;</button>
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
