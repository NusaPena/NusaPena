import "../../components/about-us";

const About = {
    async render() {
        return `
            <about-us></about-us>
        `;
    },

    async afterRender() {
        const aboutUs = document.querySelector("about-us");
            if (aboutUs) {
                aboutUs.scrollToContent();
            }
    },
};

export default About;