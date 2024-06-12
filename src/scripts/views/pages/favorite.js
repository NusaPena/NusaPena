import FavoriteStoryIdb from "../../data/favorite-story-idb";

const Favorite = {
  async render() {
    return `
        <section class="explore-section">
          <story-navigation></story-navigation>
          <story-list></story-list>
        </section>
      `;
  },

  async afterRender() {
		const favoriteListElement = document.querySelector("story-list");
    const storyNavigation = document.querySelector("story-navigation");
      if (storyNavigation) {
        storyNavigation.scrollToContent();
        storyNavigation.addEventListener("selectedCategory", (filterBtnEvent) => {
          const { category } = filterBtnEvent.detail;
            if (favoriteListElement) {
              favoriteListElement.filterStories(category);
            }
        });
      }

      try {
        const favoriteListData = await FavoriteStoryIdb.getAllStory();
          if (favoriteListData.length === 0) {
            favoriteListElement.isEmpty();
          } else {
            favoriteListElement.setStoryList(favoriteListData);
          }
      } catch (error) {
        if (favoriteListElement) {
          favoriteListElement.isError();
        }
        console.error("Error fetch favorite story list: ", error);
      }
  },
};

export default Favorite;
