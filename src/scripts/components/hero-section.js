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
        <img class="hero_small lazyload" data-src="./images/heros/hero-small.png" alt="Hero Image">
        <img class="hero_left lazyload" data-src="./images/heros/hero-left.png" alt="Hero Image">
        <div class="inner">
          <p>Yuk Jelajahi <b>Cerita Rakyat</b></p>
          <p><b>Indonesia</b> Bersama</p>
          <h1>NusaPena</h1>
          <a href="#explore-section" id="hero-explore" class="skip-link" aria-label="Jelajahi Cerita"><span class="material-symbols-outlined">
          footprint
          </span> Mulai Jelajah</a>
        </div>
        <img class="hero_right lazyload" data-src="./images/heros/hero-right.png" alt="Hero Image">
      </section>
      `;
  }
}
customElements.define("hero-section", HeroSection);
