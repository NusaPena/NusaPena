import "../../components/about-us";

const About = {
    async render() {
        return `
            <about-us></about-us>
        `;
    },

    async afterRender() {
        console.log("test");
    },
};

export default About;