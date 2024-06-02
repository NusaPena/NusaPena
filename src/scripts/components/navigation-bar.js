class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="nav-title">
        <a href="#explore-section" id="skip-link" class="skip-link" aria-label="Jelajahi Cerita">Jelajahi</a>
        <h2>NusaPena</h2>
      </div>

      <button id="drawer" class="nav-drawer" aria-label="Navigation Drawer" tabindex="0">☰</button>
      <nav id="navList" class="nav-list">
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Cerita</a></li>
          <li><a href="#">Favorite</a></li>
          <li><a href="#/tentang">Tentang Kami</a></li>
        </ul>
      </nav>
    `;

    const drawer = document.querySelector("#drawer");
    const navList = document.querySelector(".nav-list");

    drawer.addEventListener("click", () => {
      navList.classList.toggle("open");
    });
  }
}

customElements.define("navigation-bar", NavigationBar);
