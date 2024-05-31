class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
      <picture>
        <source media="(min-width: 720px)" srcset="./images/heros/hero.png">
        <img src="./images/heros/hero.png" alt="Hero Image">
      </picture>
      <div class="inner">
        <p>Yuk Jelajahi Cerita Rakyat</p>
        <p><b>Indonesia</b> Bersama</p>
        <h1>NusaPena</h1>
        <a href="#explore-section" id="hero-explore" class="skip-link" aria-label="Jelajahi Cerita">Mulai Jelajah</a>
      </div>
      </section>
      `;
  }
}
customElements.define("hero-section", HeroSection);
