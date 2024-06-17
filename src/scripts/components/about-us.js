class AboutUs extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="about">
                <h1>Kenalan Yuk dengan</h1>
                <h1 id="bold">Nusa Pena</h1>

                <p><b>NusaPena</b> adalah platform pembelajaran interaktif yang 
                    menawarkan pengalaman <b>membaca cerita rakyat Indonesia 
                    secara menyenangkan</b>, bertujuan untuk meningkatkan <b>literasi 
                    budaya dan kreativitas</b> anak-anak di era digital.
                </p>

                <h2>Our Developer</h2>
                <div class="developer-container">
                    <div class="profile-box">
                        <img class="lazyload" data-src="./images/profpict/Nia.png" alt="profile picture">
                        <h3>Illinia Malika Putri</h3>
                        <p>UI/UX Designer</p>
                        <p>Front-End Developer</p>
                        <div class="contact">
                            <a href="https://github.com/NiaPutri23" class="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="mailto:illiniamalika23@gmail.com"class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/illinia" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="profile-box">
                        <img class="lazyload" data-src="./images/profpict/Rafi.png" alt="profile picture">
                        <h3>M. Rafi Aria Sarosa</h3>
                        <p>Front-End Developer</p>
                        <p>Back-End Developer</p>
                        <div class="contact">
                            <a href="https://github.com/Rfiraf" class="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="mailto:rafisarosa56@gmail.com"class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/muhammad-rafi-aria-sarosa/" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="profile-box">
                        <img class="lazyload" data-src="./images/profpict/Ilham.png" alt="profile picture">
                        <h3>Ilham Alifio Daruwijaya</h3>
                        <p>Front-End Developer</p>
                        <p>Back-End Developer</p>
                        <div class="contact">
                            <a href="https://github.com/IlhamAlifioD" class="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="mailto:alifiowijaya1424@gmail.com"class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/ilham-alifio-daruwijaya/" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    scrollToContent() {
		const element = this.querySelector(".about");
		const offset = 130;

		const elementPosition = element.getBoundingClientRect().top + window.scrollY;
		const offsetPosition = elementPosition - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}
}

customElements.define("about-us", AboutUs);
