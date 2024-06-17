import "../../components/genre-section";
import StorySource from "../../data/story-source";

const Main = {
    async render() {
        return `
            <hero-section></hero-section>
            <genre-section></genre-section>
            <section class="explore-section" id="explore-section">
                <h2 class="main-text">Mau Baca Apa Hari Ini?</h2>
                <story-list></story-list>
                <a class="main-button" href="#/explore">Lihat Semua <i class="fa-solid fa-arrow-right"></i></a>
            </section>
        `;
    },

    async afterRender() {
        const storyList = document.querySelector("story-list");

        try {
            const stories = await StorySource.getStoryList();
            console.log("Fetched Stories: ", stories);
            if (storyList) {
                storyList.setPreviewStoryList(stories);
            } else {
                console.error("story-list element not found in the DOM");
            }
        } catch (error) {
            if (storyList) {
                storyList.isError();
            }
            console.error("Failed to Fetch Story List: ", error);
        }
    },
};

export default Main;
