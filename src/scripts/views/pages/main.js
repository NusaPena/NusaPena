import "../../components/genre-section";

const Main = {
    async render() {
        return `
        <genre-section></genre-section>
        `;
    },

    async afterRender() {
        console.log("test");
    },
};

export default Main;