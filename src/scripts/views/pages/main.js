import "../../components/hero-section";
import "../../components/genre-section"
const Main = {
    async render() {
        return `
        <hero-section></hero-section>
        <genre-section></genre-section>
        `;
    }
}

export default Main;