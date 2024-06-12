class PersonalityBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="personality-box">
            <div class="container">
                <div class="left">
                    <h1>Tokoh apa kah kamu di dalam cerita?</h1>
                    <p>Yuk coba ikuti personality quiz untuk tau!</p>
                </div>
                <div class="right">
                    <a href="#/personality">TEST SEKARANG</a>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define("personality-box", PersonalityBox);