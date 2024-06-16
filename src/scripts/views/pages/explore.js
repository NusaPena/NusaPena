import StorySource from "../../data/story-source";

const Explore = {
	async render() {
		return `
		<section class="explore-section">
			<story-navigation></story-navigation>
			<story-list></story-list>
		</section>
          `;
	},

	async afterRender() {
		const storyList = document.querySelector("story-list");
		const storyNavigation = document.querySelector("story-navigation");
		if (storyNavigation) {
			storyNavigation.scrollToContent();
			storyNavigation.addEventListener("selectedCategory", (filterBtnEvent) => {
				const { category } = filterBtnEvent.detail;
				if (storyList) {
					storyList.filterStories(category);
				}
			});
		}

		try {
			const stories = await StorySource.getStoryList();
			console.log("Fetched Stories: ", stories);
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

export default Explore;
