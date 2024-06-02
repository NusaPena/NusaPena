class TentangKami extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <section class="tentang">
      <h1>Kenalan Yuk dengan</h1>
      <h1 class="bold">Nusa Pena</h1>

      <p><b>NusaPena</b> adalah platform pembelajaran interaktif yang 
          menawarkan pengalaman <b>membaca cerita rakyat Indonesia 
          secara menyenangkan</b>, bertujuan untuk meningkatkan <b>literasi 
          budaya dan kreativitas</b> anak-anak di era digital.
      </p>

      <h2>Our Developer</h2>
      <div class="developer-container">
          <div class="profile-box">
              <img src="./images/profpict.png" alt="profile picture">
              <h3>Illinia Malika Putri</h3>
              <p>UI/UX Designer</p>
              <p>Front-End Developer</p>
              <div class="contact">
                  <a class="icon"></a>
                  <a class="icon"></a>
                  <a class="icon"></a>
              </div>
          </div>
          <div class="profile-box">
              <img src="./images/profpict.png" alt="profile picture">
              <h3>M. Rafi Aria Sarosa</h3>
              <p>UI/UX Designer</p>
              <p>Front-End Developer</p>
              <div class="contact">
                  <a class="icon"></a>
                  <a class="icon"></a>
                  <a class="icon"></a>
              </div>
          </div>
          <div class="profile-box">
              <img src="./images/profpict.png" alt="profile picture">
              <h3>Ilham Alifio Daruwijaya</h3>
              <p>UI/UX Designer</p>
              <p>Front-End Developer</p>
              <div class="contact">
                  <a class="icon"></a>
                  <a class="icon"></a>
                  <a class="icon"></a>
              </div>
          </div>
      </div>
  </section>
        `;
    }
}
  
  customElements.define("tentang-kami", TentangKami);
  