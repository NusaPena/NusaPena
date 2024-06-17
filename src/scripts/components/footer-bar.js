class FooterBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer-top">
      <div class="footer-title">
        <h2>NusaPena<h2>
        <p>Menyelami Warisan Budaya,</p>
        <p>Menginspirasi Generasi Masa Depan</p>
      </div>

      <div class="footer-members">
        <p>F0016XB260 - Illinia Malika Putri </p>
        <p>F2886YB302 - M. Rafi Aria Sarosa</p>
        <p>F2886YB360 - Ilham Alifio Daruwijaya</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 NusaPena All Rights Reserved.</p>
    </div>
      `;
  }
}
customElements.define("footer-bar", FooterBar);
