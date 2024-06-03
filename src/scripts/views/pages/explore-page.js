import StorySource from "../../data/story-source";

const ExplorePage = {
	async render() {
		return `
               <section class="explore-section">
                    <story-list></story-list>
               </section>
          `;
	},

	async afterRender() {
          const storyList = document.querySelector("story-list");
		try {
			const stories = await StorySource.getStoryList();
			console.log("Fetched Stories: ", stories); // Log untuk melihat data stories

			if (storyList) {
				storyList.setStoryList(stories);
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

export default ExplorePage;
