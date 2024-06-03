import "../../components/tentang-kami";

const Tentang = {
    async render() {
        return `
        <tentang-kami></tentang-kami>
        `;
    },

    async afterRender() {
        console.log("test");
    },
};

export default Tentang;