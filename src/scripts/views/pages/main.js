import "../../components/genre-section";

const Main = {
    async render() {
        return `
        <hero-section></hero-section>
        <genre-section></genre-section>
        `;
    },

    async afterRender() {
        console.log("test");
    },
};

export default Main;